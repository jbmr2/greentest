import { 
  collection, 
  getDocs, 
  doc, 
  setDoc, 
  updateDoc, 
  deleteDoc, 
  onSnapshot,
  query,
  orderBy
} from "firebase/firestore";
import { db } from "./firebase";
import { TEAMS, SCHEDULE, TOP_BATSMEN, TOP_BOWLERS } from "../data";

// Collection Names
const TEAMS_COL = "teams";
const SCHEDULE_COL = "schedule";
const STATS_COL = "stats";

export const dbService = {
  // Seeding
  async seedDatabase() {
    const teamsSnap = await getDocs(collection(db, TEAMS_COL));
    if (teamsSnap.empty) {
      for (const team of TEAMS) {
        await setDoc(doc(db, TEAMS_COL, team.id), team);
      }
    }

    const scheduleSnap = await getDocs(collection(db, SCHEDULE_COL));
    if (scheduleSnap.empty) {
      for (const match of SCHEDULE) {
        await setDoc(doc(db, SCHEDULE_COL, match.id), match);
      }
    }

    const statsSnap = await getDocs(collection(db, STATS_COL));
    if (statsSnap.empty) {
      await setDoc(doc(db, STATS_COL, "leaderboards"), {
        batsmen: TOP_BATSMEN,
        bowlers: TOP_BOWLERS
      });
    }
  },

  // Teams
  subscribeTeams(callback: (teams: any[]) => void) {
    return onSnapshot(collection(db, TEAMS_COL), (snap) => {
      callback(snap.docs.map(doc => doc.data()));
    });
  },

  async updateTeam(id: string, data: any) {
    await updateDoc(doc(db, TEAMS_COL, id), data);
  },

  async addTeam(data: any) {
    const newDoc = doc(collection(db, TEAMS_COL));
    const team = { ...data, id: newDoc.id };
    await setDoc(newDoc, team);
    return team;
  },

  async deleteTeam(id: string) {
    await deleteDoc(doc(db, TEAMS_COL, id));
  },

  // Schedule
  subscribeSchedule(callback: (matches: any[]) => void) {
    const q = query(collection(db, SCHEDULE_COL), orderBy("date", "asc"));
    return onSnapshot(q, (snap) => {
      callback(snap.docs.map(doc => doc.data()));
    });
  },

  async updateMatch(id: string, data: any) {
    await updateDoc(doc(db, SCHEDULE_COL, id), data);
  },

  async addMatch(data: any) {
    const newDoc = doc(collection(db, SCHEDULE_COL));
    const match = { ...data, id: newDoc.id };
    await setDoc(newDoc, match);
    return match;
  },

  async deleteMatch(id: string) {
    await deleteDoc(doc(db, SCHEDULE_COL, id));
  },

  // Stats
  subscribeStats(callback: (stats: any) => void) {
    return onSnapshot(doc(db, STATS_COL, "leaderboards"), (snap) => {
      callback(snap.data());
    });
  },

  async updateStats(data: any) {
    await setDoc(doc(db, STATS_COL, "leaderboards"), data);
  }
};

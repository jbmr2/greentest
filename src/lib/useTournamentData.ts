import { useState, useEffect } from "react";
import { dbService } from "./db-service";
import { TEAMS as LOCAL_TEAMS, SCHEDULE as LOCAL_SCHEDULE, TOP_BATSMEN, TOP_BOWLERS } from "../data";

export function useTournamentData() {
  const [teams, setTeams] = useState<any[]>(LOCAL_TEAMS);
  const [schedule, setSchedule] = useState<any[]>(LOCAL_SCHEDULE);
  const [stats, setStats] = useState<any>({ batsmen: TOP_BATSMEN, bowlers: TOP_BOWLERS });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubTeams = dbService.subscribeTeams((data) => {
      // Only set if data is not demo data
      if (data.length > 0 && !data.some(t => t.id === 't1' && t.name === 'Greenwood Strikers')) {
        setTeams(data);
      } else if (data.length === 0) {
        setTeams([]);
      }
    });
    
    const unsubSchedule = dbService.subscribeSchedule((data) => {
      // Only set if data is not demo data
      if (data.length > 0 && !data.some(m => m.id === 's1m1')) {
        setSchedule(data);
      } else if (data.length === 0) {
        setSchedule([]);
      }
    });

    const unsubStats = dbService.subscribeStats((data) => {
      if (data) {
        // Filter out demo stats
        const isDemo = data.batsmen?.some((p: any) => p.name === 'Aarav Sharma');
        if (!isDemo) {
          setStats(data);
        } else {
          setStats({ batsmen: [], bowlers: [] });
        }
      }
    });

    setLoading(false);
    return () => {
      unsubTeams();
      unsubSchedule();
      unsubStats();
    };
  }, []);

  return { teams, schedule, stats, loading };
}

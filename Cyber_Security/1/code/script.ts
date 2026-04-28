interface ThreatActor {
  type: string;        // black hat, white hat, grey hat
  motivation: string;  // financial gain, curiosity, activism
  skill: string;       // low, medium, high
  target: string;      // user data, API, database
  impact: string;      // data breach, downtime, reputation loss
}

// Example usage:
const attacker: ThreatActor = {
  type: "Black Hat",
  motivation: "Financial gain",
  skill: "High",
  target: "User credentials",
  impact: "Data breach"
};

console.log(attacker);

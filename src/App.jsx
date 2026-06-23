import React, { useState, useEffect } from "react";
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Box,
  Container,
  Typography,
  AppBar,
  Toolbar,
  Button,
  Menu,
  MenuItem,
  Paper,
  IconButton,
  Grid,
  Tooltip,
  Divider,
  Slider,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Checkbox,
  LinearProgress,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Card,
  CardContent,
  Badge,
  Alert,
  Chip,
  TextField
} from "@mui/material";

// Icons from Lucide-react (beautifully styled outlast terminal feel)
import {
  Skull,
  Flame,
  Volume2,
  VolumeX,
  RefreshCw,
  Sliders,
  Target,
  FileText,
  ShieldAlert,
  Search,
  CheckSquare,
  HelpCircle,
  Eye,
  Settings,
  ChevronRight,
  TrendingDown,
  Lock,
  Unlock,
  Radio as SignalIcon,
  Play,
  User,
  Mail,
  Fingerprint,
  LogIn,
  LogOut
} from "lucide-react";

import { MAPS_DATA, ENEMIES_DATA } from "./data";
import AdmissionDesk from "./components/AdmissionDesk";
import Header from "./components/Header";
import TrialProtocol from "./components/TrialProtocol";
import TrialEvaluator from "./components/TrialEvaluator";
import TrialSelection from "./components/TrialSelection";

export default function App() {
  // Persistent Reagent account profile setup
  const [reagentProfile, setReagentProfile] = useState(() => {
    try {
      const saved = localStorage.getItem("murkoff_reagent_profile");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && parsed.email) {
          return parsed;
        } else {
          localStorage.removeItem("murkoff_reagent_profile");
        }
      }
    } catch (e) {
      console.error(e);
    }
    return null;
  });

  const [formEmail, setFormEmail] = useState("");
  const [formFirstName, setFormFirstName] = useState("");
  const [formLastName, setFormLastName] = useState("");
  const [formSubjectNumber, setFormSubjectNumber] = useState("");
  const [formError, setFormError] = useState("");
  const [isAgreedTerms, setIsAgreedTerms] = useState(true);

  // Theme and Night Vision state
  const [nightVision, setNightVision] = useState(false);
  const [audioEnabled, setAudioEnabled] = useState(true);

  // Info dialogue state for Enemy Info / Strategy
  const [enemyDialogOpen, setEnemyDialogOpen] = useState(false);
  const [selectedEnemy, setSelectedEnemy] = useState(null);

  // Custom audio synthesizer helper
  const playBeep = (freq, type = "sine", duration = 0.08) => {
    if (!audioEnabled) return;
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, ctx.currentTime);

      if (type === "sawtooth") {
        // Night vision start drone sweep
        osc.frequency.exponentialRampToValueAtTime(freq * 0.4, ctx.currentTime + duration);
        gain.gain.setValueAtTime(0.04, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
      } else if (type === "square") {
        // High alert error beep
        gain.gain.setValueAtTime(0.03, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
      } else {
        // Standard tiny mechanical click
        gain.gain.setValueAtTime(0.02, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
      }

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch (e) {
      // Ignored if sound blocked by browser policy
    }
  };

  // Toggle night vision with sound hum
  const toggleNightVision = () => {
    if (!nightVision) {
      playBeep(260, "sawtooth", 0.35);
      setTimeout(() => playBeep(520, "sine", 0.15), 50);
    } else {
      playBeep(180, "sawtooth", 0.2);
    }
    setNightVision(!nightVision);
  };

  // Trigger click sound
  const handleTick = () => playBeep(1200, "sine", 0.03);
  const handleInteract = () => playBeep(800, "sine", 0.05);
  const handleError = () => playBeep(350, "square", 0.2);

  // Reagent registration logic
  const handleRegisterReagent = (e) => {
    if (e) e.preventDefault();
    if (!formEmail.trim() || !formFirstName.trim() || !formLastName.trim() || !formSubjectNumber.trim()) {
      setFormError("COMPULSORY WARNING: ALL BIO-METRIC DOSSIER REGISTRATION FIELDS REQUIRED.");
      handleError();
      return;
    }
    // simple email regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formEmail)) {
      setFormError("ERROR CODE 401: INVALID SUBJECT EMAIL ADDRESS PATTERN.");
      handleError();
      return;
    }
    // Strict @murkoff.com domain restriction - relaxed to allow other credential domains for testing and general community access
    if (!formEmail.trim().toLowerCase().includes("@") && !formEmail.trim().toLowerCase().endsWith("@murkoff.com")) {
      setFormError("ACCESS RESTRICTED: INVALID SECURITY CREDENTIALS. ONLY AUTHORIZED REAGENT EMAIL ADDRESSES GRANTED ACCESS.");
      handleError();
      return;
    }
    if (!isAgreedTerms) {
      setFormError("ERROR: ACCESS BLOCKED UNTIL MORAL WAIVER AND THERAPY LIABILITY INDEMNITY SIGNED.");
      handleError();
      return;
    }

    const payload = {
      email: formEmail.trim(),
      firstName: formFirstName.trim(),
      lastName: formLastName.trim(),
      subjectNumber: formSubjectNumber.trim(),
    };
    try {
      localStorage.setItem("murkoff_reagent_profile", JSON.stringify(payload));
    } catch (err) {
      console.error(err);
    }
    setReagentProfile(payload);
    setFormError("");
    playBeep(600, "sine", 0.1);
    setTimeout(() => playBeep(900, "sine", 0.15), 100);
  };

  const handleGenerateSubjectNumber = () => {
    const randomId = "SN-" + Math.floor(10000 + Math.random() * 90000) + "-X";
    setFormSubjectNumber(randomId);
    playBeep(1400, "sine", 0.04);
  };

  // Material UI custom dynamic theme
  const terminalTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: nightVision ? "#ffff33" : "#1aff43", // Monochrome green or bright neon night-vision yellow
      },
      secondary: {
        main: nightVision ? "#ffeb3b" : "#ff9e00", // Alert orange/yellow
      },
      background: {
        default: nightVision ? "#0d0e01" : "#011302", // CRT military green vs deep dark green
        paper: nightVision ? "#1d1f05" : "#032005",
      },
      text: {
        primary: nightVision ? "#e6ff33" : "#39ff14",
        secondary: nightVision ? "#c8d926" : "#89f196",
      },
    },
    typography: {
      fontFamily: '"Share Tech Mono", "JetBrains Mono", monospace',
    },
  });

  if (!reagentProfile) {
    return (
      <ThemeProvider theme={terminalTheme}>
        <CssBaseline />
        <AdmissionDesk
          formEmail={formEmail}
          setFormEmail={setFormEmail}
          formFirstName={formFirstName}
          setFormFirstName={setFormFirstName}
          formLastName={formLastName}
          setFormLastName={setFormLastName}
          formSubjectNumber={formSubjectNumber}
          setFormSubjectNumber={setFormSubjectNumber}
          formError={formError}
          isAgreedTerms={isAgreedTerms}
          setIsAgreedTerms={setIsAgreedTerms}
          nightVision={nightVision}
          toggleNightVision={toggleNightVision}
          audioEnabled={audioEnabled}
          setAudioEnabled={setAudioEnabled}
          handleTick={handleTick}
          handleRegisterReagent={handleRegisterReagent}
          handleGenerateSubjectNumber={handleGenerateSubjectNumber}
        />
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={terminalTheme}>
      <CssBaseline />
      <ClinicalDashboard
        key={reagentProfile.email.trim().toLowerCase()}
        reagentProfile={reagentProfile}
        onSignOut={() => {
          setReagentProfile(null);
          localStorage.removeItem("murkoff_reagent_profile");
        }}
        nightVision={nightVision}
        toggleNightVision={toggleNightVision}
        audioEnabled={audioEnabled}
        setAudioEnabled={setAudioEnabled}
      />
    </ThemeProvider>
  );
}

// Separate scoped workspaces to enforce pristine per-reagent data-isolation across sessions
function ClinicalDashboard({
  reagentProfile,
  onSignOut,
  nightVision,
  toggleNightVision,
  audioEnabled,
  setAudioEnabled
}) {
  const getInitialProgressValue = (key, defaultValue) => {
    try {
      if (!reagentProfile || !reagentProfile.email) return defaultValue;
      const email = reagentProfile.email.trim().toLowerCase();
      const progressSaved = localStorage.getItem(`murkoff_progress_${email}`);
      if (progressSaved) {
        const parsedProgress = JSON.parse(progressSaved);
        if (parsedProgress && key in parsedProgress) {
          return parsedProgress[key];
        }
      }
    } catch (e) {
      console.error(e);
    }
    return defaultValue;
  };

  // Selection states
  const [selectedMapId, setSelectedMapId] = useState(() => getInitialProgressValue("selectedMapId", "police_station"));
  const [selectedActivity, setSelectedActivity] = useState(() => {
    const initialMap = getInitialProgressValue("selectedMapId", "police_station");
    const initialActivityName = getInitialProgressValue("selectedActivityName", null);
    const foundMap = MAPS_DATA.find((m) => m.id === initialMap) || MAPS_DATA[0];
    if (initialActivityName) {
      const foundActivity = foundMap.activities.find((a) => a.name === initialActivityName);
      if (foundActivity) return foundActivity;
    }
    return foundMap.activities[0] || null;
  });

  // Search filter
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState("all"); // "all", "trial", "mk"

  // Dropdown menu state for header buttons: map ID -> anchor element
  const [anchorEl, setAnchorEl] = useState({});

  // Objectives checklist state
  const [completedObjectives, setCompletedObjectives] = useState(() => getInitialProgressValue("completedObjectives", {}));

  // Patient Evaluation Calculator state
  const [evalTime, setEvalTime] = useState(() => getInitialProgressValue("evalTime", 25));
  const [evalPsychosis, setEvalPsychosis] = useState(() => getInitialProgressValue("evalPsychosis", 1));
  const [evalDamage, setEvalDamage] = useState(() => getInitialProgressValue("evalDamage", "moderate")); // "minor", "moderate", "severe", "critical"
  const [evalTraps, setEvalTraps] = useState(() => getInitialProgressValue("evalTraps", 3));
  const [evalAssists, setEvalAssists] = useState(() => getInitialProgressValue("evalAssists", 1));
  const [evalEvidence, setEvalEvidence] = useState(() => getInitialProgressValue("evalEvidence", 2));
  const [evalEvidenceTotal, setEvalEvidenceTotal] = useState(() => getInitialProgressValue("evalEvidenceTotal", 3));
  const [evalIncapacitated, setEvalIncapacitated] = useState(() => getInitialProgressValue("evalIncapacitated", 0));
  const [evalUsedRig, setEvalUsedRig] = useState(() => getInitialProgressValue("evalUsedRig", 1));
  const [evalGrade, setEvalGrade] = useState(() => getInitialProgressValue("evalGrade", null));
  const [actualGameGrade, setActualGameGrade] = useState(() => getInitialProgressValue("actualGameGrade", ""));

  // Info dialogue state for Enemy Info / Strategy
  const [enemyDialogOpen, setEnemyDialogOpen] = useState(false);
  const [selectedEnemy, setSelectedEnemy] = useState(null);

  // Custom audio synthesizer helper
  const playBeep = (freq, type = "sine", duration = 0.08) => {
    if (!audioEnabled) return;
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, ctx.currentTime);

      if (type === "sawtooth") {
        osc.frequency.exponentialRampToValueAtTime(freq * 0.4, ctx.currentTime + duration);
        gain.gain.setValueAtTime(0.04, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
      } else if (type === "square") {
        gain.gain.setValueAtTime(0.03, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
      } else {
        gain.gain.setValueAtTime(0.02, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
      }

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch (e) {
      // Ignored
    }
  };

  const handleTick = () => playBeep(1200, "sine", 0.03);
  const handleInteract = () => playBeep(800, "sine", 0.05);
  const handleError = () => playBeep(350, "square", 0.2);

  // Auto-save clinical evaluation & trials checklist progress on state change
  useEffect(() => {
    try {
      if (!reagentProfile || !reagentProfile.email) return;
      const email = reagentProfile.email.trim().toLowerCase();
      const progressToSave = {
        completedObjectives,
        selectedMapId,
        selectedActivityName: selectedActivity?.name || null,
        evalTime,
        evalPsychosis,
        evalDamage,
        evalTraps,
        evalAssists,
        evalEvidence,
        evalEvidenceTotal,
        evalIncapacitated,
        evalUsedRig,
        actualGameGrade,
        evalGrade
      };
      localStorage.setItem(`murkoff_progress_${email}`, JSON.stringify(progressToSave));
    } catch (e) {
      console.error(e);
    }
  }, [
    completedObjectives,
    selectedMapId,
    selectedActivity,
    evalTime,
    evalPsychosis,
    evalDamage,
    evalTraps,
    evalAssists,
    evalEvidence,
    evalEvidenceTotal,
    evalIncapacitated,
    evalUsedRig,
    actualGameGrade,
    evalGrade
  ]);

  // Calculate grade score based on input variables
  const calculateEvaluationGrade = () => {
    handleInteract();
    // Start with base score of 100
    let score = 100;

    // Psychosis Breaks penalty (High penalty)
    score -= evalPsychosis * 12;

    // Damage Taken penalty
    if (evalDamage === "critical" || evalDamage === "kia") score -= 30;
    else if (evalDamage === "severe") score -= 18;
    else if (evalDamage === "moderate") score -= 8;

    // Traps triggered penalty
    score -= evalTraps * 2;

    // Incapacitated penalty
    score -= evalIncapacitated * 10;

    // Team assists bonus (Max bonus 10)
    score += Math.min(evalAssists * 5, 10);

    // Used Rig bonus (Max bonus 15)
    score += Math.min(evalUsedRig * 3, 15);

    // Reagent Evidence bonus (Max bonus 15)
    const evidenceRatio = evalEvidenceTotal > 0 ? (evalEvidence / evalEvidenceTotal) : 0;
    score += Math.min(15, Math.round(evidenceRatio * 15));

    // Restrict score between 0 and 100
    score = Math.max(0, Math.min(100, score));

    // Assign grades
    let grade = "C";
    let comment = "Marginal candidate. Additional exposure and behavior modification therapy recommended.";
    let color = "#39ff14";

    if (evalDamage === "kia") {
      grade = "F";
      comment = "BIO-WASTE CLASSIFIED. Absolute therapy reject. Specimen was completely shattered inside the trial. Re-allocating remains to basic biomass processing.";
      color = "#ff1744";
      score = 0;
    } else {
      if (score >= 95) {
        grade = "A+";
        comment = "PERFECT TRIAL. Outstanding reflex speed, absolute stress stability, and precise compliance. Dr. Easterman is incredibly pleased with your progress. Release procedures prepared.";
        color = "#ffeb3b";
      } else if (score >= 90) {
        grade = "A";
        comment = "Excellent execution. Standard operational objectives achieved with flawless rhythm. Prime candidate for prospective release.";
        color = "#1aff43";
      } else if (score >= 85) {
        grade = "A-";
        comment = "Highly effective trial run. Minimal cognitive fragmentation. Only minor deviations in sub-vocal response values.";
        color = "#16d439";
      } else if (score >= 80) {
        grade = "B+";
        comment = "Strong behavioral correction observed. Sound structural stability under pressure. Specimen is highly responsive to therapy.";
        color = "#39ff14";
      } else if (score >= 75) {
        grade = "B";
        comment = "Satisfactory specimen. Minor mental leakage of sanity under pressure, but core goals accomplished. Proceeding steadily.";
        color = "#39ff14";
      } else if (score >= 70) {
        grade = "B-";
        comment = "Acceptable performance. Shows moderate compliance, but brainwave patterns indicate mild panic. Proceed with caution.";
        color = "#35d115";
      } else if (score >= 65) {
        grade = "C+";
        comment = "Borderline compliance. The therapy is beginning to stick, but we require a stronger purge of the old self.";
        color = "#ffb700";
      } else if (score >= 58) {
        grade = "C";
        comment = "Marginal candidate. High stress readings, extreme adrenaline spike logs. Additional exposure and behavior modification therapy recommended.";
        color = "#ff9e00";
      } else if (score >= 50) {
        grade = "C-";
        comment = "Sub-optimal compliance. High structural noise levels. Coyle or Gooseberry had multiple sightings. We require better focus.";
        color = "#ffa114";
      } else if (score >= 42) {
        grade = "D+";
        comment = "Severe behavioral instability detected. The subject is highly susceptible to external triggers and showing signs of extreme cognitive drift. Therapy calibration required.";
        color = "#ff8533";
      } else if (score >= 35) {
        grade = "D";
        comment = "Critical failure near-miss. Severe physical fragmentation, high hallucination counts, and absolute reliance on luck. Prepare for intensive sensory calibration.";
        color = "#ff5722";
      } else {
        grade = "D-";
        comment = "On the absolute brink of psychosis collapse. Heart rate logs indicate severe vegetative trauma. Only saved by extreme triage intervention.";
        color = "#f44336";
      }
    }

    setEvalGrade({ grade, comment, score, color });
  };

  // Switch actively highlighted trial/MK challenge
  const handleSelectActivity = (activity, mapId) => {
    handleInteract();
    setSelectedMapId(mapId);
    setSelectedActivity(activity);
  };

  // Check/uncheck objective step keyed by activity name
  const handleToggleObjective = (objName) => {
    if (!selectedActivity) return;
    handleTick();
    setCompletedObjectives((prev) => {
      const activityName = selectedActivity.name;
      const currentActivityObjectives = prev[activityName] || {};
      return {
        ...prev,
        [activityName]: {
          ...currentActivityObjectives,
          [objName]: !currentActivityObjectives[objName]
        }
      };
    });
  };

  const handleOpenMenu = (event, mapId) => {
    handleTick();
    setAnchorEl((prev) => ({
      ...prev,
      [mapId]: event.currentTarget,
    }));
  };

  const handleCloseMenu = (mapId) => {
    setAnchorEl((prev) => ({
      ...prev,
      [mapId]: null,
    }));
  };

  const handleMenuClick = (activity, mapId) => {
    handleSelectActivity(activity, mapId);
    handleCloseMenu(mapId);
  };

  const handleOpenEnemy = (enemyName) => {
    const data = ENEMIES_DATA[enemyName];
    if (data) {
      handleInteract();
      setSelectedEnemy(data);
      setEnemyDialogOpen(true);
    } else {
      handleError();
    }
  };

  const allActivitiesFiltered = () => {
    let list = [];
    MAPS_DATA.forEach((m) => {
      m.activities.forEach((act) => {
        const matchesSearch =
          act.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (act.enemies || []).some((e) => e.toLowerCase().includes(searchQuery.toLowerCase()));

        const matchesType =
          filterType === "all" ||
          (filterType === "trials" && act.type === "Trial") ||
          (filterType === "mk" && act.type === "MK-Challenge");

        if (matchesSearch && matchesType) {
          list.push({ ...act, mapId: m.id, mapName: m.name });
        }
      });
    });
    return list;
  };

  return (
    <Box
      className={`crt-screen ${nightVision ? "vintage-flicker" : ""}`}
      sx={{
        minHeight: "100vh",
        pb: 10,
        color: "text.primary",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          pointerEvents: "none",
          zIndex: 100,
          background: "linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%)",
          backgroundSize: "100% 3px",
        }}
      />

      {/* System Bar */}
      <Box
        sx={{
          px: 2,
          py: 0.5,
          borderBottom: "1px solid",
          borderColor: "primary.main",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: "0.75rem",
          letterSpacing: 2,
          opacity: 0.8,
          backgroundColor: "background.default",
          flexWrap: "wrap",
          gap: 1,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <span style={{ color: nightVision ? "#ffeb3b" : "#ff2222" }}>● CLASSIFIED</span>
          <Box component="span" sx={{ display: { xs: "none", sm: "inline" }, color: "#ffffff", opacity: 0.6 }}>|</Box>
          <Box component="span" sx={{ display: { xs: "none", sm: "inline" } }}>SYSTEM_MAINFRAME_ONLINE // SESSION_2026</Box>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2, flexWrap: "wrap" }}>
          <span>
            REAGENT: {reagentProfile?.lastName?.toUpperCase() || ""}, {reagentProfile?.firstName?.toUpperCase() || ""} ({reagentProfile?.subjectNumber || ""})
          </span>
          <Box component="span" sx={{ display: { xs: "none", md: "inline" }, color: "#ffffff", opacity: 0.6 }}>|</Box>
          <Box component="span" sx={{ display: { xs: "none", md: "inline" } }}>EMAIL: {nightVision ? "CONFIDENTIAL" : reagentProfile?.email || ""}</Box>
          <span style={{ color: "#ffffff", opacity: 0.6 }}>|</span>
          <Button
            size="small"
            variant="text"
            color="secondary"
            onClick={() => {
              playBeep(200, "sawtooth", 0.15);
              onSignOut();
            }}
            sx={{
              fontSize: "0.65rem",
              p: 0,
              minWidth: 0,
              height: "auto",
              fontWeight: "bold",
              textDecoration: "underline",
              letterSpacing: 1,
              textTransform: "uppercase",
              "&:hover": {
                backgroundColor: "transparent",
                color: "#ff2222",
              },
            }}
          >
            [Sign Out]
          </Button>
          <Box component="span" sx={{ display: { xs: "none", md: "inline" }, color: "#ffffff", opacity: 0.6 }}>|</Box>
          <Box component="span" sx={{ display: { xs: "none", md: "inline" } }}>DIAG_STATUS: NO_ERRORS</Box>
        </Box>
      </Box>

      {/* Header Navigation with logo */}
      <Header
        nightVision={nightVision}
        audioEnabled={audioEnabled}
        setAudioEnabled={setAudioEnabled}
        toggleNightVision={toggleNightVision}
        anchorEl={anchorEl}
        selectedMapId={selectedMapId}
        handleOpenMenu={handleOpenMenu}
        handleCloseMenu={handleCloseMenu}
        handleMenuClick={handleMenuClick}
      />

      {/* Major Content Layout: Grid structure mirroring the requested attached image directory list */}
      <Container maxWidth="xl" sx={{ mt: 3 }}>
        
        {/* Main Top Warning Panel */}
        <Paper
          className="crt-border"
          sx={{
            p: 2,
            mb: 3,
            backgroundColor: "rgba(10, 20, 11, 0.8)",
            border: "1px solid",
            borderColor: "primary.main",
            borderRadius: 0,
          }}
        >
          <Grid container spacing={2} sx={{ alignItems: "center" }}>
            <Grid item xs={12} md={9}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <ShieldAlert size={28} color={nightVision ? "#ffff33" : "#ff3333"} style={{ flexShrink: 0 }} />
                <Box>
                  <Typography variant="h6" sx={{ color: "#ffffff", fontWeight: "bold", textTransform: "uppercase" }}>
                    SUBJECT WARNING - PATIENT DIAGNOSIS SECURED
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.75, fontSize: "0.85rem" }}>
                    The following catalog displays historical records of operational zones (Maps) and therapeutic
                    protocols (Trials & MK-Challenges) initiated by the Murkoff Corporation. Use the top registry buttons, the interactive map grid below, or search tool to extract targets.
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={3} sx={{ display: "flex", justifyContent: { xs: "flex-start", md: "flex-end" } }}>
              <Box
                sx={{
                  px: 2,
                  py: 1,
                  backgroundColor: "rgba(255, 30, 30, 0.15)",
                  border: "1px double #ff3333",
                  textAlign: "center",
                  textTransform: "uppercase",
                  width: "100%",
                }}
              >
                <Typography variant="caption" sx={{ color: "#ff5555", fontWeight: "bold", display: "block" }}>
                  TREATMENT STATUS
                </Typography>
                <Typography variant="subtitle2" sx={{ color: "#ffffff", fontWeight: "bold" }}>
                  SHATTER_MIND_AND_REBUILD
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Paper>

        {/* Core Interactive Layout: LEFT list / table & RIGHT Detail Dossier Panel */}
        <Grid container spacing={3}>
          
          {/* Left Column: Active Dossier Sheet displaying selected Trial / MK Details & Evaluator */}
          <Grid item xs={12} lg={5}>
            <TrialProtocol
              selectedActivity={selectedActivity}
              selectedMapId={selectedMapId}
              reagentProfile={reagentProfile}
              completedObjectives={completedObjectives[selectedActivity?.name] || {}}
              handleToggleObjective={handleToggleObjective}
              handleOpenEnemy={handleOpenEnemy}
            />

            {/* Patient Evaluation Form / Interactive Game Grade Form */}
            <TrialEvaluator
              evalTime={evalTime}
              setEvalTime={setEvalTime}
              evalPsychosis={evalPsychosis}
              setEvalPsychosis={setEvalPsychosis}
              evalTraps={evalTraps}
              setEvalTraps={setEvalTraps}
              evalAssists={evalAssists}
              setEvalAssists={setEvalAssists}
              evalEvidence={evalEvidence}
              setEvalEvidence={setEvalEvidence}
              evalEvidenceTotal={evalEvidenceTotal}
              setEvalEvidenceTotal={setEvalEvidenceTotal}
              evalDamage={evalDamage}
              setEvalDamage={setEvalDamage}
              evalIncapacitated={evalIncapacitated}
              setEvalIncapacitated={setEvalIncapacitated}
              evalUsedRig={evalUsedRig}
              setEvalUsedRig={setEvalUsedRig}
              calculateEvaluationGrade={calculateEvaluationGrade}
              evalGrade={evalGrade}
              actualGameGrade={actualGameGrade}
              setActualGameGrade={setActualGameGrade}
            />
          </Grid>

          {/* Right Column: Dynamic selection matrix */}
          <Grid item xs={12} lg={7}>
            <TrialSelection
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              filterType={filterType}
              setFilterType={setFilterType}
              handleTick={handleTick}
              selectedMapId={selectedMapId}
              nightVision={nightVision}
              selectedActivity={selectedActivity}
              handleSelectActivity={handleSelectActivity}
            />
          </Grid>
        </Grid>
      </Container>

      {/* Footer info containing developer reference */}
      <Box
        sx={{
          textAlign: "center",
          opacity: 0.5,
          fontSize: "0.73rem",
          px: 2,
          mt: 8,
        }}
      >
        <Typography variant="body2" sx={{ letterSpacing: 1.5 }}>
          THE OUTLAST TRIALS • FAN DIRECTORY PROGRAM • POWERED BY MURKOFF COMPUTER CORP.
        </Typography>
        <Typography variant="caption" sx={{ display: "block", mt: 0.5 }}>
          All logo and game marks belong standardly to Red Barrels Inc. Treated for behavioral formatting.
        </Typography>
      </Box>

      {/* Enemy Profile Dialog Sheet */}
      <Dialog
        open={enemyDialogOpen}
        onClose={() => setEnemyDialogOpen(false)}
        sx={{
          "& .MuiDialog-container": {
            "& .MuiPaper-root": {
              backgroundColor: "#051107",
              border: "2px solid",
              borderColor: "primary.main",
              borderRadius: 0,
              color: "text.primary",
              fontFamily: '"Share Tech Mono", monospace',
              maxWidth: 500,
            },
          },
        }}
      >
        {selectedEnemy && (
          <>
            <DialogTitle
              sx={{
                borderBottom: "1px dashed #00ff33",
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                pb: 1.5,
              }}
            >
              <Skull color={"#ff5555"} size={24} />
              <Box>
                <Typography variant="h6" sx={{ fontWeight: "bold", textTransform: "uppercase" }}>
                  {selectedEnemy.name} dossier
                </Typography>
                <Typography variant="caption" sx={{ color: "orange" }}>
                  CLASSIFIED LEVEL 5 PRIMARY ASSORTMENT
                </Typography>
              </Box>
            </DialogTitle>
            <DialogContent sx={{ mt: 2 }}>
              <Box sx={{ mb: 2 }}>
                <Typography variant="caption" sx={{ opacity: 0.6, display: "block" }}>
                  FIELD NICKNAME:
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: "bold", color: "#ffffff" }}>
                  {selectedEnemy.alias}
                </Typography>
              </Box>

              <Box sx={{ mb: 2 }}>
                <Typography variant="caption" sx={{ opacity: 0.6, display: "block" }}>
                  FAVORED WEAPON PROFILE:
                </Typography>
                <Typography variant="body2" sx={{ fontWeight: "bold", color: "#ff5555" }}>
                  {selectedEnemy.weapon}
                </Typography>
              </Box>

              <Box sx={{ mb: 2 }}>
                <Typography variant="caption" sx={{ opacity: 0.6, display: "block" }}>
                  SURGICAL BACKGROUND:
                </Typography>
                <Typography variant="body2" sx={{ lineHeight: 1.6, opacity: 0.85, whiteSpace: "pre-line" }}>
                  {selectedEnemy.description}
                </Typography>
              </Box>

              <Box
                sx={{
                  p: 1.5,
                  backgroundColor: "rgba(255, 30, 30, 0.08)",
                  border: "1px solid rgba(255, 50, 50, 0.3)",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 0.5 }}>
                  <ShieldAlert size={14} color={"#ff5555"} />
                  <Typography variant="caption" sx={{ fontWeight: "bold", color: "#ff5555" }}>
                    COUNTERMEASURE WARNING DIRECTIVE FOR IN-GAME APPS:
                  </Typography>
                </Box>
                <Typography variant="body2" sx={{ fontSize: "0.8rem", color: "#ffffff" }}>
                  {selectedEnemy.tactics}
                </Typography>
              </Box>
            </DialogContent>
            <DialogActions sx={{ borderTop: "1px dashed #00ff33", p: 2 }}>
              <Button
                onClick={() => {
                  handleTick();
                  setEnemyDialogOpen(false);
                }}
                variant="outlined"
                color="primary"
                fullWidth
                sx={{ fontWeight: "bold", color: "primary.main" }}
              >
                DISMISS LOG
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </Box>
  );
}

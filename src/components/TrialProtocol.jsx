import React from "react";
import {
  Box,
  Paper,
  Typography,
  Divider,
  Grid,
  LinearProgress,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Checkbox,
  Chip
} from "@mui/material";
import { Target, Skull, FileText, HelpCircle } from "lucide-react";
import { MAPS_DATA } from "../data";

export default function TrialProtocol({
  selectedActivity,
  selectedMapId,
  reagentProfile,
  completedObjectives,
  handleToggleObjective,
  handleOpenEnemy
}) {
  if (!selectedActivity) {
    return (
      <Paper
        className="crt-border"
        sx={{
          p: 4,
          textAlign: "center",
          backgroundColor: "background.paper",
          border: "1px solid",
          borderColor: "primary.main",
          borderRadius: 0,
          mb: 3,
        }}
      >
        <HelpCircle size={48} color={"#1aff43"} style={{ margin: "auto", marginBottom: 16 }} />
        <Typography variant="h6">NO DOSSIER RETRIEVED</Typography>
        <Typography variant="body2" sx={{ opacity: 0.5, mt: 1 }}>
          Select any Trial or MK challenge on the directory matrix grid to download tactical intelligence.
        </Typography>
      </Paper>
    );
  }

  const objectives = selectedActivity.objectives || [];
  const totalObjectives = objectives.length;
  const completedCount = objectives.filter((obj) => completedObjectives[obj]).length;
  const progressPercent = totalObjectives > 0 ? (completedCount / totalObjectives) * 100 : 0;

  const currentMap = MAPS_DATA.find((m) => m.id === selectedMapId);
  const mapName = currentMap?.name || "";

  const getPrimeAssetTrap = () => {
    const id = (selectedMapId || "").toLowerCase();
    const name = mapName.toLowerCase();

    if (id === "police_station" || id === "courthouse" || name.includes("police") || name.includes("court")) {
      return "SHOCK GRIDS";
    }
    if (id === "orphanage" || id === "fun_park" || id === "toy_factory" || name.includes("orphan") || name.includes("fun park") || name.includes("toy")) {
      return "FUTTERMINES";
    }
    if (id === "docks" || id === "downtown" || id === "suburbs" || name.includes("dock") || name.includes("down") || name.includes("suburb")) {
      return "TRIPWIRE BOMBS";
    }
    if (id === "shopping_mall" || id === "television_studio" || name.includes("shopping") || name.includes("television") || name.includes("tv")) {
      return "EMETIC FLASKS";
    }
    if (id === "resort" || name.includes("resort")) {
      return "FALSE IDOLS";
    }
    if (id === "waste_tunnel" || id === "mansion" || id === "new_map" || name.includes("waste") || name.includes("mansion") || name.includes("new map") || name.includes("unnamed")) {
      return "ALL PRIME ASSET TRAPS";
    }
    return "STANDARD HAZARDS";
  };

  return (
    <Paper
      className="crt-border"
      sx={{
        p: { xs: 2.5, sm: 4 },
        backgroundColor: "background.paper",
        border: "1px solid",
        borderColor: "primary.main",
        position: "relative",
        borderRadius: 0,
        mb: 3,
      }}
    >
      {/* Retro Diagonal Dossier Stamp */}
      <Box
        className="classified-stamp"
        sx={{
          position: "absolute",
          top: 20,
          right: 20,
          px: 2,
          py: 0.5,
          fontWeight: "bold",
          fontSize: "0.8rem",
          zIndex: 10,
          letterSpacing: 2,
          textTransform: "uppercase",
          display: { xs: "none", sm: "block" },
        }}
      >
        CLASSIFIED FILES
      </Box>

      {/* Header info */}
      <Box sx={{ mb: 2 }}>
        <Typography
          variant="overline"
          sx={{
            color: "secondary.main",
            fontWeight: "bold",
            letterSpacing: 1.5,
            display: "flex",
            alignItems: "center",
            gap: 0.5,
          }}
        >
          <Target size={12} /> {selectedActivity.type} PROTOCOL DETAILS
        </Typography>
        <Typography
          variant="h4"
          className="crt-glow"
          sx={{
            fontWeight: "bold",
            textTransform: "uppercase",
            color: "#ffffff",
            lineHeight: 1.2,
            mt: 0.5,
          }}
        >
          {selectedActivity.name}
        </Typography>
        <Typography variant="caption" sx={{ display: "block", color: "primary.main", mt: 0.5 }}>
          MAP REGISTRATION: {MAPS_DATA.find((m) => m.id === selectedMapId)?.name?.toUpperCase() || ""}
        </Typography>
        {reagentProfile && (
          <Typography variant="caption" sx={{ display: "block", color: "secondary.main", mt: 0.5, fontWeight: "bold" }}>
            ASSIGNED REAGENT: {reagentProfile?.lastName?.toUpperCase() || ""}, {reagentProfile?.firstName?.toUpperCase() || ""} ({reagentProfile?.subjectNumber || ""})
          </Typography>
        )}
      </Box>

      <Divider sx={{ borderColor: "rgba(0, 255, 66, 0.25)", my: 2 }} />

      {/* Description Box */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="subtitle2" sx={{ fontWeight: "bold", color: "#ffffff", mb: 0.5 }}>
          MISSION BACKGROUND / DIALECTIC LORE:
        </Typography>
        <Typography variant="body2" sx={{ opacity: 0.8, lineHeight: 1.6 }}>
          {selectedActivity.description}
        </Typography>
      </Box>

      {/* Difficulty, Target Assets */}
      <Grid container spacing={2} sx={{ mb: 3 }}>
        <Grid item xs={6}>
          <Typography variant="caption" sx={{ display: "block", opacity: 0.6 }}>
            DIFFICULTY RE-RATING
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, mt: 0.5 }}>
            {Array.from({ length: 5 }).map((_, i) => (
              <Skull
                key={i}
                size={16}
                color={i < selectedActivity.difficulty ? "#ff3333" : "rgba(255,255,255,0.1)"}
                style={{ filter: i < selectedActivity.difficulty ? "drop-shadow(0 0 2px rgba(255,0,0,0.4))" : "none" }}
              />
            ))}
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="caption" sx={{ display: "block", opacity: 0.6 }}>
            PRIME ASSET TRAPS:
          </Typography>
          <Typography variant="body2" sx={{ fontWeight: "bold", color: "primary.main", mt: 0.5 }}>
            {getPrimeAssetTrap()}
          </Typography>
        </Grid>
      </Grid>

      <Divider sx={{ borderColor: "rgba(0, 255, 66, 0.25)", mb: 2 }} />

      {/* Interactive Objectives checklist */}
      <Box sx={{ mb: 3.5 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", mb: 1 }}>
          <Typography variant="subtitle2" sx={{ fontWeight: "bold", color: "#ffffff" }}>
            OPERATIONAL TIMELINE STEPS (CHECKLIST):
          </Typography>
          <Typography variant="caption" sx={{ color: "primary.main", fontWeight: "bold" }}>
            {completedCount}/{totalObjectives} RESOLVED
          </Typography>
        </Box>

        {/* Progress slider bar */}
        <LinearProgress
          variant="determinate"
          value={progressPercent}
          sx={{
            mb: 2,
            height: 6,
            backgroundColor: "rgba(0, 255, 66, 0.1)",
            "& .MuiLinearProgress-bar": { backgroundColor: "primary.main" },
          }}
        />

        <List sx={{ p: 0, border: "1px dashed rgba(0, 255, 66, 0.25)" }}>
          {objectives.map((obj) => {
            const isDone = Boolean(completedObjectives[obj]);
            return (
              <ListItemButton
                key={obj}
                onClick={() => handleToggleObjective(obj)}
                dense
                sx={{
                  borderBottom: "1px solid rgba(0, 255, 66, 0.1)",
                  "&:last-child": { borderBottom: "none" },
                  backgroundColor: isDone ? "rgba(26, 255, 67, 0.05)" : "transparent",
                  "&:hover": {
                    backgroundColor: "rgba(26, 255, 67, 0.1)",
                  },
                }}
              >
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <Checkbox
                    size="small"
                    checked={isDone}
                    sx={{
                      color: "rgba(0, 255, 66, 0.4)",
                      "&.Mui-checked": { color: "primary.main" },
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography
                      sx={{
                        fontSize: "0.8rem",
                        textDecoration: isDone ? "line-through" : "none",
                        opacity: isDone ? 0.5 : 1,
                        fontFamily: "inherit",
                      }}
                    >
                      {obj}
                    </Typography>
                  }
                />
              </ListItemButton>
            );
          })}
        </List>
      </Box>

      {/* Enemies present in Trial */}
      <Box sx={{ mb: 3.5 }}>
        <Typography variant="subtitle2" sx={{ fontWeight: "bold", color: "#ffffff", mb: 1 }}>
          PRIMARY HOSTILE EX-POPS IN THE FIELD:
        </Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
          {(selectedActivity.enemies || []).map((enemy) => {
            const isPrime =
              enemy === "Leland Coyle" || enemy === "Mother Gooseberry" || enemy === "Franco Barbi" || enemy === "Otto and Arora Kress" || enemy === "Liliya Bogomolova";
            return (
              <Chip
                key={enemy}
                label={enemy}
                icon={<Skull size={10} />}
                onClick={() => handleOpenEnemy(enemy)}
                size="small"
                sx={{
                  fontSize: "0.7rem",
                  fontWeight: isPrime ? "bold" : "normal",
                  backgroundColor: isPrime ? "rgba(255, 30, 30, 0.15)" : "rgba(0, 255, 66, 0.1)",
                  color: isPrime ? "#ff5555" : "primary.main",
                  border: isPrime ? "1px solid rgba(255, 50, 50, 0.4)" : "1px solid rgba(0, 255, 66, 0.2)",
                  "& .MuiChip-icon": { color: isPrime ? "#ff5555" : "primary.main" },
                  "&:hover": {
                    backgroundColor: isPrime ? "rgba(255, 30, 30, 0.3)" : "rgba(0, 255, 66, 0.25)",
                  },
                }}
              />
            );
          })}
        </Box>
        <Typography variant="caption" sx={{ display: "block", mt: 0.5, opacity: 0.5 }}>
          *Click on enemy tag to load confidential physical profile & tactics
        </Typography>
      </Box>

      {/* Tactical Guidance logs / Tips */}
      <Box
        sx={{
          p: 2,
          backgroundColor: "rgba(26, 255, 67, 0.05)",
          borderLeft: "4px solid",
          borderColor: "primary.main",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 0.5 }}>
          <FileText size={14} color={"#1aff43"} />
          <Typography variant="caption" sx={{ fontWeight: "bold", color: "primary.main" }}>
            TACTICAL REAGENT TRAINING GUIDELINE
          </Typography>
        </Box>
        <Typography variant="body2" sx={{ fontSize: "0.8rem", opacity: 0.9, lineHeight: 1.5 }}>
          {selectedActivity.tactics}
        </Typography>
      </Box>
    </Paper>
  );
}

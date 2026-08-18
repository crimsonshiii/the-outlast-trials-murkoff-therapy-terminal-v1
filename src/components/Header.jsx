import React, { useState } from "react";
import {
  AppBar,
  Container,
  Toolbar,
  Box,
  Typography,
  IconButton,
  Button,
  Divider,
  Menu,
  MenuItem,
  Badge,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  Tabs,
  Tab,
} from "@mui/material";
import {
  Skull,
  Volume2,
  VolumeX,
  Eye,
  ChevronDown,
  ChevronRight,
  ShieldAlert,
  Target,
  Flame,
  FileText,
  MapPin,
  Crosshair,
  X
} from "lucide-react";
import { MAPS_DATA } from "../data";

export default function Header({
  nightVision,
  audioEnabled,
  setAudioEnabled,
  toggleNightVision,
  selectedMapId,
  selectedActivity,
  handleSelectActivity,
  handleMenuClick,
}) {
  // Main dropdown menu anchor state
  const [dropdownAnchorEl, setDropdownAnchorEl] = useState(null);
  const isDropdownOpen = Boolean(dropdownAnchorEl);

  // Modal / Prompt state for choosing Trial & MK-Challenge for a selected environment
  const [promptMap, setPromptMap] = useState(null);
  const [activeTab, setActiveTab] = useState(0); // 0: All, 1: Trials, 2: MK-Challenges

  // Current active map object
  const currentMap = MAPS_DATA.find((m) => m.id === selectedMapId) || MAPS_DATA[0];

  const handleOpenDropdown = (event) => {
    setDropdownAnchorEl(event.currentTarget);
  };

  const handleCloseDropdown = () => {
    setDropdownAnchorEl(null);
  };

  // When user clicks a Trial Environment from the dropdown, prompt them to choose Trial / MK-Challenge
  const handleEnvironmentSelect = (map) => {
    handleCloseDropdown();
    setPromptMap(map);
    setActiveTab(0); // Default to viewing all protocols or trials
  };

  const handleClosePrompt = () => {
    setPromptMap(null);
  };

  const handleChooseProtocol = (activity, mapId) => {
    if (handleSelectActivity) {
      handleSelectActivity(activity, mapId);
    } else if (handleMenuClick) {
      handleMenuClick(activity, mapId);
    }
    handleClosePrompt();
  };

  // Filter activities in the prompt dialog
  const promptTrials = promptMap?.activities.filter((a) => a.type === "Trial") || [];
  const promptMKs = promptMap?.activities.filter((a) => a.type === "MK-Challenge") || [];
  const promptDisplayedActivities =
    activeTab === 1 ? promptTrials : activeTab === 2 ? promptMKs : promptMap?.activities || [];

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "background.paper",
        borderBottom: "2px solid",
        borderColor: "primary.main",
        boxShadow: "0 4px 20px rgba(0, 255, 66, 0.1)",
      }}
      elevation={0}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ py: 1, flexDirection: "column", alignItems: "stretch" }}>
          
          {/* Top Row: Brand & Master Toggles */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 2,
              mb: 1.5,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
              <Skull
                size={36}
                color={nightVision ? "#ffff33" : "#39ff14"}
                className={nightVision ? "animate-pulse" : ""}
              />
              <Box>
                <Typography
                  variant="h4"
                  className="crt-glow"
                  sx={{
                    fontWeight: 900,
                    letterSpacing: 1.5,
                    lineHeight: 1.1,
                    fontFamily: '"Share Tech Mono", monospace',
                    textTransform: "uppercase",
                    fontSize: { xs: "1.3rem", sm: "1.8rem", md: "2.125rem" },
                  }}
                >
                  Murkoff Therapy Terminal
                </Typography>
                <Typography variant="caption" sx={{ opacity: 0.6, fontSize: "0.65rem", display: "block" }}>
                  SUB-SURFACE EVALUATION ARCHIVE // DR. EASTERMAN EVAL-V1.0.1
                </Typography>
              </Box>
            </Box>

            {/* Master Status Controllers */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              {/* Audio Toggle */}
              <IconButton
                onClick={() => setAudioEnabled(!audioEnabled)}
                color="primary"
                size="small"
                title={audioEnabled ? "Mute Terminal Beeps" : "Enable Terminal Beeps"}
                sx={{ border: "1px dashed", borderColor: "primary.main", borderRadius: 1, p: 1 }}
              >
                {audioEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
              </IconButton>

              {/* Night Vision Toggle */}
              <Button
                variant="outlined"
                color={nightVision ? "secondary" : "primary"}
                onClick={toggleNightVision}
                startIcon={<Eye size={16} />}
                size="small"
                sx={{
                  fontSize: "0.75rem",
                  fontWeight: "bold",
                }}
              >
                {nightVision ? "DISCOVER NVG VISION [OFF]" : "INITIATE NIGHT VISION [ON]"}
              </Button>
            </Box>
          </Box>

          <Divider sx={{ borderColor: "primary.main", borderStyle: "dashed", mb: 1.5 }} />

          {/* Revised Single Dropdown Section for all Trial Environments */}
          <Box sx={{ width: "100%", display: "flex", flexDirection: "column", gap: 1 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: 1,
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  letterSpacing: 1,
                  opacity: 0.85,
                  color: "primary.main",
                  fontWeight: "bold",
                  fontSize: "0.72rem",
                  fontFamily: '"Share Tech Mono", monospace',
                }}
              >
                <MapPin size={13} style={{ color: "#39ff14" }} />
                TRIAL ENVIRONMENT DIRECTORY REGISTRY:
              </Typography>

              {selectedActivity && (
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Typography variant="caption" sx={{ opacity: 0.6, fontSize: "0.68rem" }}>
                    ENGAGED PROTOCOL:
                  </Typography>
                  <Chip
                    size="small"
                    label={`${currentMap?.name} // ${selectedActivity.name}`}
                    variant="outlined"
                    color={selectedActivity.type === "Trial" ? "secondary" : "primary"}
                    sx={{
                      fontSize: "0.7rem",
                      height: 22,
                      fontFamily: '"Share Tech Mono", monospace',
                      fontWeight: "bold",
                    }}
                  />
                </Box>
              )}
            </Box>

            {/* Single Master Dropdown Button */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, flexWrap: "wrap" }}>
              <Button
                variant="contained"
                onClick={handleOpenDropdown}
                endIcon={<ChevronDown size={16} />}
                startIcon={<Crosshair size={16} />}
                sx={{
                  backgroundColor: "rgba(26, 255, 67, 0.15)",
                  color: "#ffffff",
                  border: "2px solid",
                  borderColor: "primary.main",
                  borderRadius: 0,
                  px: 2.5,
                  py: 1,
                  fontFamily: '"Share Tech Mono", monospace',
                  fontSize: { xs: "0.8rem", sm: "0.9rem" },
                  letterSpacing: 1.2,
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  boxShadow: "0 0 12px rgba(26, 255, 67, 0.2)",
                  "&:hover": {
                    backgroundColor: "primary.main",
                    color: "#000000",
                    borderColor: "primary.main",
                  },
                }}
              >
                SELECT TRIAL ENVIRONMENT [{currentMap ? currentMap.name : "DIRECTORY"}]
              </Button>

              <Typography variant="caption" sx={{ opacity: 0.6, fontSize: "0.7rem" }}>
                (Click to select any location and launch Trial / MK-Challenge selector)
              </Typography>
            </Box>

            {/* Single Dropdown Menu listing ALL Trial Environments */}
            <Menu
              anchorEl={dropdownAnchorEl}
              open={isDropdownOpen}
              onClose={handleCloseDropdown}
              elevation={8}
              sx={{
                "& .MuiPaper-root": {
                  backgroundColor: "#020f04",
                  border: "2px solid",
                  borderColor: "primary.main",
                  borderRadius: 0,
                  minWidth: 320,
                  maxWidth: 420,
                  maxHeight: 520,
                  boxShadow: "0 8px 32px rgba(0, 255, 66, 0.25)",
                  fontFamily: '"Share Tech Mono", monospace',
                },
              }}
            >
              {/* Menu Header Banner */}
              <Box
                sx={{
                  px: 2,
                  py: 1.2,
                  backgroundColor: "#011c05",
                  borderBottom: "1px solid",
                  borderColor: "primary.main",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="overline"
                  sx={{
                    color: "primary.main",
                    fontWeight: "bold",
                    letterSpacing: 1.5,
                    fontSize: "0.75rem",
                  }}
                >
                  ALL TRIAL ENVIRONMENTS ({MAPS_DATA.length})
                </Typography>
                <Typography variant="caption" sx={{ opacity: 0.5, fontSize: "0.65rem" }}>
                  MURKOFF LATHE
                </Typography>
              </Box>

              {/* List of Environments */}
              {MAPS_DATA.map((map) => {
                const isCurrent = selectedMapId === map.id;
                const trialCount = map.activities.filter((a) => a.type === "Trial").length;
                const mkCount = map.activities.filter((a) => a.type === "MK-Challenge").length;

                return (
                  <MenuItem
                    key={map.id}
                    onClick={() => handleEnvironmentSelect(map)}
                    sx={{
                      py: 1.2,
                      px: 2,
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      borderBottom: "1px solid rgba(0, 255, 66, 0.08)",
                      backgroundColor: isCurrent ? "rgba(26, 255, 67, 0.12)" : "transparent",
                      "&:hover": {
                        backgroundColor: "rgba(26, 255, 67, 0.25)",
                      },
                    }}
                  >
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 0.3 }}>
                      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <Typography
                          variant="body2"
                          sx={{
                            fontWeight: "bold",
                            color: isCurrent ? "primary.main" : "#ffffff",
                            textTransform: "uppercase",
                            letterSpacing: 0.8,
                            fontFamily: '"Share Tech Mono", monospace',
                          }}
                        >
                          {map.name}
                        </Typography>
                        {isCurrent && (
                          <Chip
                            size="small"
                            label="ACTIVE"
                            sx={{
                              height: 16,
                              fontSize: "0.55rem",
                              backgroundColor: "primary.main",
                              color: "#000000",
                              fontWeight: "bold",
                            }}
                          />
                        )}
                      </Box>
                      <Typography variant="caption" sx={{ opacity: 0.65, fontSize: "0.68rem" }}>
                        {trialCount > 0 ? `${trialCount} Trial` : "0 Trials"} • {mkCount} MK-Challenges
                      </Typography>
                    </Box>

                    <ChevronRight size={16} style={{ color: isCurrent ? "#39ff14" : "rgba(255,255,255,0.4)" }} />
                  </MenuItem>
                );
              })}
            </Menu>

          </Box>
        </Toolbar>
      </Container>

      {/* Interactive Operational Prompt Modal for Selecting Trial and MK-Challenge */}
      <Dialog
        open={Boolean(promptMap)}
        onClose={handleClosePrompt}
        maxWidth="md"
        fullWidth
        sx={{
          "& .MuiDialog-container": {
            "& .MuiPaper-root": {
              backgroundColor: "#020f04",
              border: "2px solid",
              borderColor: "primary.main",
              borderRadius: 0,
              color: "text.primary",
              fontFamily: '"Share Tech Mono", monospace',
              boxShadow: "0 0 40px rgba(0, 255, 66, 0.2)",
            },
          },
        }}
      >
        {promptMap && (
          <>
            {/* Modal Header */}
            <DialogTitle
              sx={{
                backgroundColor: "#011a05",
                borderBottom: "2px solid",
                borderColor: "primary.main",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                py: 1.5,
                px: 2.5,
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                <Target size={24} color="#39ff14" />
                <Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 900,
                      textTransform: "uppercase",
                      letterSpacing: 1.5,
                      color: "#ffffff",
                      fontFamily: '"Share Tech Mono", monospace',
                      lineHeight: 1.1,
                    }}
                  >
                    {promptMap.name} Operations Protocol
                  </Typography>
                  <Typography variant="caption" sx={{ color: "primary.main", opacity: 0.8, fontSize: "0.7rem" }}>
                    MURKOFF FACILITY DIRECTORY // SELECT SPECIFIC TRIAL OR MK-CHALLENGE
                  </Typography>
                </Box>
              </Box>

              <IconButton
                onClick={handleClosePrompt}
                size="small"
                sx={{
                  color: "primary.main",
                  border: "1px solid rgba(0, 255, 66, 0.4)",
                  borderRadius: 0,
                  "&:hover": { backgroundColor: "rgba(255, 34, 34, 0.2)", borderColor: "#ff3333" },
                }}
              >
                <X size={18} />
              </IconButton>
            </DialogTitle>

            <DialogContent sx={{ p: 2.5 }}>
              {/* Map Description Banner */}
              {promptMap.description && (
                <Box
                  sx={{
                    p: 1.5,
                    mb: 2,
                    backgroundColor: "rgba(26, 255, 67, 0.05)",
                    borderLeft: "3px solid",
                    borderColor: "primary.main",
                  }}
                >
                  <Typography variant="caption" sx={{ opacity: 0.6, display: "block", fontWeight: "bold" }}>
                    ENVIRONMENT ASSESSMENT:
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.9, fontSize: "0.85rem", fontStyle: "italic" }}>
                    "{promptMap.description}"
                  </Typography>
                </Box>
              )}

              {/* Protocol Filter Tabs (All / Trials / MK-Challenges) */}
              <Box sx={{ borderBottom: 1, borderColor: "rgba(0, 255, 66, 0.2)", mb: 2 }}>
                <Tabs
                  value={activeTab}
                  onChange={(e, v) => setActiveTab(v)}
                  textColor="inherit"
                  indicatorColor="primary"
                  sx={{
                    minHeight: 36,
                    "& .MuiTab-root": {
                      minHeight: 36,
                      py: 0.5,
                      px: 2,
                      fontFamily: '"Share Tech Mono", monospace',
                      fontSize: "0.8rem",
                      fontWeight: "bold",
                      textTransform: "uppercase",
                      color: "rgba(255,255,255,0.6)",
                      "&.Mui-selected": {
                        color: "primary.main",
                      },
                    },
                  }}
                >
                  <Tab label={`ALL PROTOCOLS (${promptMap.activities.length})`} />
                  <Tab label={`TRIALS (${promptTrials.length})`} />
                  <Tab label={`MK-CHALLENGES (${promptMKs.length})`} />
                </Tabs>
              </Box>

              {/* Protocol Cards Grid */}
              <Grid container spacing={2}>
                {promptDisplayedActivities.map((act) => {
                  const isTrial = act.type === "Trial";
                  const isSelected = selectedActivity?.name === act.name;

                  return (
                    <Grid item xs={12} sm={6} key={act.name}>
                      <Card
                        sx={{
                          backgroundColor: isSelected
                            ? "rgba(26, 255, 67, 0.12)"
                            : "rgba(1, 20, 5, 0.6)",
                          border: "1px solid",
                          borderColor: isSelected
                            ? "primary.main"
                            : isTrial
                            ? "secondary.main"
                            : "rgba(0, 255, 66, 0.3)",
                          borderRadius: 0,
                          transition: "all 0.2s ease",
                          "&:hover": {
                            borderColor: "primary.main",
                            transform: "translateY(-2px)",
                            boxShadow: "0 4px 16px rgba(0, 255, 66, 0.2)",
                          },
                        }}
                      >
                        <CardActionArea
                          onClick={() => handleChooseProtocol(act, promptMap.id)}
                          sx={{ p: 2, display: "flex", flexDirection: "column", alignItems: "flex-start", height: "100%" }}
                        >
                          <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%", mb: 1 }}>
                            <Chip
                              size="small"
                              label={act.type.toUpperCase()}
                              color={isTrial ? "secondary" : "primary"}
                              sx={{
                                fontSize: "0.65rem",
                                height: 20,
                                fontWeight: "bold",
                                fontFamily: '"Share Tech Mono", monospace',
                              }}
                            />
                            <Typography
                              variant="caption"
                              sx={{
                                color: "warning.main",
                                fontWeight: "bold",
                                fontSize: "0.75rem",
                              }}
                            >
                              {"★".repeat(act.difficulty)}
                              <span style={{ opacity: 0.3 }}>{"★".repeat(Math.max(0, 5 - act.difficulty))}</span>
                            </Typography>
                          </Box>

                          <Typography
                            variant="subtitle1"
                            sx={{
                              fontWeight: "bold",
                              color: isSelected ? "primary.main" : "#ffffff",
                              fontFamily: '"Share Tech Mono", monospace',
                              lineHeight: 1.2,
                              mb: 1,
                            }}
                          >
                            {act.name}
                          </Typography>

                          {act.description && (
                            <Typography
                              variant="body2"
                              sx={{
                                opacity: 0.75,
                                fontSize: "0.75rem",
                                mb: 1.5,
                                display: "-webkit-box",
                                WebkitLineClamp: 2,
                                WebkitBoxOrient: "vertical",
                                overflow: "hidden",
                              }}
                            >
                              {act.description}
                            </Typography>
                          )}

                          {act.enemies && act.enemies.length > 0 && (
                            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, flexWrap: "wrap", mt: "auto" }}>
                              <Skull size={12} color="#ff5555" />
                              <Typography variant="caption" sx={{ fontSize: "0.65rem", opacity: 0.65 }}>
                                THREAT: {act.enemies.join(", ")}
                              </Typography>
                            </Box>
                          )}
                        </CardActionArea>
                      </Card>
                    </Grid>
                  );
                })}
              </Grid>
            </DialogContent>

            <DialogActions
              sx={{
                p: 2,
                backgroundColor: "#011a05",
                borderTop: "1px solid",
                borderColor: "rgba(0, 255, 66, 0.3)",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="caption" sx={{ opacity: 0.5, fontSize: "0.7rem" }}>
                SELECT PROTOCOL CARD TO ENGAGE BRIEFING & EVALUATION
              </Typography>
              <Button
                variant="outlined"
                color="primary"
                onClick={handleClosePrompt}
                size="small"
                sx={{
                  fontFamily: '"Share Tech Mono", monospace',
                  fontWeight: "bold",
                  fontSize: "0.75rem",
                  borderRadius: 0,
                }}
              >
                CLOSE
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </AppBar>
  );
}

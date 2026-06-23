import React from "react";
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
  Badge
} from "@mui/material";
import { Skull, Volume2, VolumeX, Eye, ChevronRight } from "lucide-react";
import { MAPS_DATA } from "../data";

export default function Header({
  nightVision,
  audioEnabled,
  setAudioEnabled,
  toggleNightVision,
  anchorEl,
  selectedMapId,
  handleOpenMenu,
  handleCloseMenu,
  handleMenuClick
}) {
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
                  SUB-SURFACE EVALUATION ARCHIVE // DR. EASTERMAN EVAL-V4.11
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

          {/* Responsive Dropdowns for EACH Map strictly conforming to prompt headers directive */}
          <Box sx={{ width: "100%" }}>
            <Typography variant="caption" sx={{ display: "block", mb: 0.5, letterSpacing: 1, opacity: 0.7 }}>
              DIRECTORIES REGISTRY (SELECT CORRESPONDING LOCATION HEADER BELOW) :
            </Typography>
            
            {/* Scrollable button tier */}
            <Box
              sx={{
                display: "flex",
                gap: 1,
                overflowX: "auto",
                pb: 1,
                "&::-webkit-scrollbar": { height: "4px" },
              }}
            >
              {MAPS_DATA.map((map) => {
                const isOpen = Boolean(anchorEl[map.id]);
                return (
                  <Box key={map.id}>
                    <Button
                      variant={selectedMapId === map.id ? "contained" : "outlined"}
                      onClick={(e) => handleOpenMenu(e, map.id)}
                      endIcon={<ChevronRight size={12} style={{ transform: "rotate(90deg)" }} />}
                      size="small"
                      sx={{
                        whiteSpace: "nowrap",
                        textTransform: "uppercase",
                        fontSize: "0.75rem",
                        px: 1.5,
                        opacity: selectedMapId === map.id ? 1 : 0.75,
                        borderColor: selectedMapId === map.id ? "primary.main" : "rgba(26, 255, 67, 0.3)",
                        backgroundColor: selectedMapId === map.id ? "primary.main" : "transparent",
                        color: selectedMapId === map.id ? "#000000" : "primary.main",
                        "&:hover": {
                          borderColor: "primary.main",
                          opacity: 1,
                        },
                      }}
                    >
                      {map.name}
                    </Button>
                    <Menu
                      anchorEl={anchorEl[map.id]}
                      open={isOpen}
                      onClose={() => handleCloseMenu(map.id)}
                      elevation={8}
                      sx={{
                        "& .MuiPaper-root": {
                          backgroundColor: "background.paper",
                          border: "1px solid",
                          borderColor: "primary.main",
                          borderRadius: 0,
                          minWidth: 260,
                          maxHeight: 380,
                        },
                      }}
                    >
                      <Box sx={{ px: 2, py: 1, backgroundColor: "#021204", borderBottom: "1px dashed #00ff33" }}>
                        <Typography variant="overline" sx={{ color: "primary.main", fontWeight: "bold", opacity: 0.7 }}>
                          {map.name} Operations
                        </Typography>
                      </Box>
                      
                      {map.activities.map((act) => (
                        <MenuItem
                          key={act.name}
                          onClick={() => handleMenuClick(act, map.id)}
                          sx={{
                            fontSize: "0.8rem",
                            py: 1,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            gap: 0.2,
                            borderBottom: "1px solid rgba(0, 255, 66, 0.1)",
                            "&:hover": {
                              backgroundColor: "rgba(26, 255, 67, 0.1)",
                            },
                          }}
                        >
                          <Box sx={{ display: "flex", alignItems: "center", gap: 1, width: "100%" }}>
                            <Badge
                              variant="dot"
                              color={act.type === "Trial" ? "secondary" : "primary"}
                              sx={{ mr: 0.5 }}
                            />
                            <Typography variant="body2" sx={{ fontWeight: "bold", color: "#ffffff" }}>
                              {act.name}
                            </Typography>
                          </Box>
                          <Typography variant="caption" sx={{ scale: 0.85, originX: 0, opacity: 0.5 }}>
                            [{act.type}] • Difficulty: {act.difficulty}★
                          </Typography>
                        </MenuItem>
                      ))}
                    </Menu>
                  </Box>
                );
              })}
            </Box>
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
}

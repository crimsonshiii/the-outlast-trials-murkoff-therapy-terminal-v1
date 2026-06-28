import React from "react";
import {
  Box,
  Container,
  Typography,
  Paper,
  Divider,
  Alert,
  Grid,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
  IconButton
} from "@mui/material";
import { Skull, Volume2, VolumeX, Eye } from "lucide-react";

export default function AdmissionDesk({
  formEmail,
  setFormEmail,
  formFirstName,
  setFormFirstName,
  formLastName,
  setFormLastName,
  formSubjectNumber,
  setFormSubjectNumber,
  formError,
  isAgreedTerms,
  setIsAgreedTerms,
  nightVision,
  toggleNightVision,
  audioEnabled,
  setAudioEnabled,
  handleTick,
  handleRegisterReagent,
  handleGenerateSubjectNumber
}) {
  return (
    <Box
      className={`crt-screen ${nightVision ? "vintage-flicker" : ""}`}
      sx={{
        minHeight: "100vh",
        pb: 10,
        color: "text.primary",
        position: "relative",
        overflowX: "hidden",
        backgroundColor: "background.default",
      }}
    >
      {/* Subtle scanline overlay */}
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
          px: { xs: 1, sm: 2 },
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
          <span style={{ color: "#ffffff", opacity: 0.6 }}>|</span>
          <span>SYSTEM_MAINFRAME_ONLINE // SESSION_2026</span>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <span style={{ color: nightVision ? "#ffff33" : "#ff3333", fontWeight: "bold" }}>
            REAGENT: PROFILE NOT LOADED // INGRESS SYSTEM BLOCK
          </span>
          <span style={{ color: "#ffffff", opacity: 0.6 }}>|</span>
          <span>DIAG_STATUS: SYSTEM_HOLD</span>
        </Box>
      </Box>

      {/* Intake Screen Content */}
      <Container maxWidth="sm" sx={{ pt: { xs: 4, sm: 8 }, pb: 8, position: "relative", zIndex: 10 }}>
        <Paper
          className="crt-border"
          sx={{
            p: { xs: 3, sm: 5 },
            backgroundColor: "background.paper",
            border: "1px solid",
            borderColor: "primary.main",
            borderRadius: 0,
            boxShadow: "0 0 25px rgba(0, 255, 66, 0.15)",
            position: "relative",
          }}
        >
          {/* Stamp */}
          <Box
            sx={{
              position: "absolute",
              top: 25,
              right: 25,
              px: 1.5,
              py: 0.5,
              border: "1px solid",
              borderColor: nightVision ? "#ffff33" : "#ff3333",
              color: nightVision ? "#ffff33" : "#ff3333",
              fontWeight: "900",
              fontSize: "0.75rem",
              letterSpacing: 2,
              transform: "rotate(4deg)",
              textTransform: "uppercase",
              display: { xs: "none", sm: "block" },
            }}
          >
            UNAUTHORIZED ACCESS
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}>
            <Skull size={44} color={nightVision ? "#ffff33" : "#39ff14"} />
            <Box>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 900,
                  letterSpacing: 1.5,
                  textTransform: "uppercase",
                  color: "primary.main",
                  fontSize: { xs: "1.25rem", sm: "1.5rem" },
                }}
              >
                Murkoff Admission Desk
              </Typography>
              <Typography variant="caption" sx={{ opacity: 0.6, fontSize: "0.7rem", display: "block" }}>
                SYSTEM_MAINFRAME_INGRESS_GATE // REAGENT PROFILE INTAKE V4.1
              </Typography>
            </Box>
          </Box>

          <Divider sx={{ borderColor: "primary.main", borderStyle: "dashed", mb: 3 }} />

          <Typography variant="body2" sx={{ mb: 4, opacity: 0.85, lineHeight: 1.6, fontSize: "0.85rem" }}>
            WELCOME TO THE OUTLAST TRIALS EVALUATION INTERFACES. REGISTER YOUR PERSONAL PROFILE TO CONTINUE. YOUR PERFORMANCE GRADE AND REAGENT EVALUATIONS WILL BE LOGGED SECURELY UNDER THIS DESIGNATION.
          </Typography>

          {formError && (
            <Alert
              severity="error"
              variant="outlined"
              sx={{
                mb: 3,
                borderRadius: 0,
                borderColor: nightVision ? "#ffff33" : "#ff3333",
                backgroundColor: "rgba(255, 100, 100, 0.05)",
                color: "text.primary",
                fontFamily: "inherit",
                fontSize: "0.80rem",
                fontWeight: "bold",
                "& .MuiAlert-icon": { color: nightVision ? "#ffff33" : "#ff3333" },
              }}
            >
              {formError}
            </Alert>
          )}

          <Box component="form" onSubmit={handleRegisterReagent} noValidate>
            <Grid container spacing={2.5}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="EMAIL ADDRESS"
                  variant="outlined"
                  value={formEmail}
                  onChange={(e) => setFormEmail(e.target.value)}
                  placeholder="e.g., reagent@murkoff.com"
                  required
                  sx={{
                    "& .MuiInputLabel-root": {
                      color: "rgba(0, 255, 66, 0.6)",
                      fontFamily: "inherit",
                      fontSize: "0.85rem",
                      "&.Mui-focused": {
                        color: "primary.main",
                      },
                    },
                    "& .MuiInputBase-input": {
                      color: "#ffffff",
                      fontFamily: "inherit",
                      letterSpacing: 1,
                    },
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 0,
                      "& fieldset": { borderColor: "rgba(0, 255, 66, 0.3)" },
                      "& :hover fieldset": { borderColor: "primary.main" },
                      "&.Mui-focused fieldset": { borderColor: "primary.main" },
                    },
                  }}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="FIRST NAME"
                  variant="outlined"
                  value={formFirstName}
                  onChange={(e) => setFormFirstName(e.target.value)}
                  placeholder="e.g., Julius"
                  required
                  sx={{
                    "& .MuiInputLabel-root": {
                      color: "rgba(0, 255, 66, 0.6)",
                      fontFamily: "inherit",
                      fontSize: "0.85rem",
                      "&.Mui-focused": {
                        color: "primary.main",
                      },
                    },
                    "& .MuiInputBase-input": {
                      color: "#ffffff",
                      fontFamily: "inherit",
                    },
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 0,
                      "& fieldset": { borderColor: "rgba(0, 255, 66, 0.3)" },
                      "&:hover fieldset": { borderColor: "primary.main" },
                      "&.Mui-focused fieldset": { borderColor: "primary.main" },
                    },
                  }}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="LAST NAME"
                  variant="outlined"
                  value={formLastName}
                  onChange={(e) => setFormLastName(e.target.value)}
                  placeholder="e.g., Benedicto"
                  required
                  sx={{
                    "& .MuiInputLabel-root": {
                      color: "rgba(0, 255, 66, 0.6)",
                      fontFamily: "inherit",
                      fontSize: "0.85rem",
                      "&.Mui-focused": {
                        color: "primary.main",
                      },
                    },
                    "& .MuiInputBase-input": {
                      color: "#ffffff",
                      fontFamily: "inherit",
                    },
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 0,
                      "& fieldset": { borderColor: "rgba(0, 255, 66, 0.3)" },
                      "&:hover fieldset": { borderColor: "primary.main" },
                      "&.Mui-focused fieldset": { borderColor: "primary.main" },
                    },
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <Box sx={{ display: "flex", gap: 1 }}>
                  <TextField
                    fullWidth
                    label="SUBJECT NUMBER"
                    variant="outlined"
                    value={formSubjectNumber}
                    onChange={(e) => setFormSubjectNumber(e.target.value)}
                    placeholder="e.g., SN-43659-X"
                    required
                    sx={{
                      "& .MuiInputLabel-root": {
                        color: "rgba(0, 255, 66, 0.6)",
                        fontFamily: "inherit",
                        fontSize: "0.85rem",
                        "&.Mui-focused": {
                          color: "primary.main",
                        },
                      },
                      "& .MuiInputBase-input": {
                        color: "#ffffff",
                        fontFamily: "inherit",
                      },
                      "& .MuiOutlinedInput-root": {
                        borderRadius: 0,
                        "& fieldset": { borderColor: "rgba(0, 255, 66, 0.3)" },
                        "&:hover fieldset": { borderColor: "primary.main" },
                        "&.Mui-focused fieldset": { borderColor: "primary.main" },
                      },
                    }}
                  />
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={handleGenerateSubjectNumber}
                    sx={{
                      borderRadius: 0,
                      whiteSpace: "nowrap",
                      fontSize: "0.75rem",
                      fontWeight: "bold",
                      px: 2,
                    }}
                  >
                    GENERATE ID
                  </Button>
                </Box>
              </Grid>

              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={isAgreedTerms}
                      onChange={(e) => {
                        handleTick();
                        setIsAgreedTerms(e.target.checked);
                      }}
                      color="primary"
                      sx={{ color: "primary.main" }}
                    />
                  }
                  label={
                    <Typography variant="caption" sx={{ color: "text.secondary", fontSize: "0.75rem", display: "inline-block" }}>
                      I agree to undergo behavioral re-conditioning therapy and authorize evaluation log monitoring.
                    </Typography>
                  }
                />
              </Grid>

              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{
                    py: 1.5,
                    borderRadius: 0,
                    fontWeight: "bold",
                    fontSize: "0.9rem",
                    color: "#000000",
                    letterSpacing: 1.5,
                    textTransform: "uppercase",
                  }}
                >
                  [INITIALIZE ENTRY DOSSIER]
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Container>

      {/* Subtle audio hum alert controllers */}
      <Box sx={{ position: "fixed", bottom: 16, right: 16, display: "flex", gap: 1, zIndex: 110 }}>
        {/* Audio Toggle */}
        <IconButton
          onClick={() => {
            setAudioEnabled(!audioEnabled);
            if (handleTick) handleTick();
          }}
          color="primary"
          size="small"
          sx={{ border: "1px dashed", borderColor: "primary.main", borderRadius: 1, p: 1, backgroundColor: "background.paper" }}
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
          sx={{ fontSize: "0.75rem", fontWeight: "bold", backgroundColor: "background.paper" }}
        >
          NVG
        </Button>
      </Box>
    </Box>
  );
}

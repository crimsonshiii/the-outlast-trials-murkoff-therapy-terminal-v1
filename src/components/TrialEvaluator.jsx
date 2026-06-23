import React from "react";
import {
  Box,
  Typography,
  Paper,
  Grid,
  Slider,
  RadioGroup,
  Radio,
  FormControlLabel,
  Button
} from "@mui/material";
import { Sliders, RefreshCw, CheckSquare } from "lucide-react";

const GRADE_RANKS = {
  "A+": 12, "A": 11, "A-": 10,
  "B+": 9, "B": 8, "B-": 7,
  "C+": 6, "C": 5, "C-": 4,
  "D+": 3, "D": 2, "D-": 1,
  "F": 0
};

const getComparisonVerdict = (calculated, actual) => {
  const calcRank = GRADE_RANKS[calculated] ?? 5;
  const actRank = GRADE_RANKS[actual] ?? 5;

  if (calcRank === actRank) {
    return {
      status: "MATCHED PERFORMANCE SYNCHRONICITY",
      color: "#1aff43",
      text: "Your actual in-game performance aligns flawlessly with Murkoff's behavioral calibration simulation. The trauma-grafted neural conditioning is functioning exactly as engineered."
    };
  } else if (actRank > calcRank) {
    return {
      status: "COMBAT EFFICIENCY OVERFLOW",
      color: "#ffeb3b",
      text: "You performed better in the field than our clinical algorithm estimated! Your physical coping mechanism is highly functional, bypasses predicted neural friction, or your quick reflexes compensated for traumatic exposures."
    };
  } else {
    return {
      status: "CLINICAL SIMULATION GAP",
      color: "#ff3d00",
      text: "Our behavior algorithm estimated higher compliance and survival ratings than your actual field execution. This suggests hidden panic under pressure, unrecorded traps triggered, or minor cognitive fractures. Seek intensive calibration."
    };
  }
};

export default function TrialEvaluator({
  evalTime,
  setEvalTime,
  evalPsychosis,
  setEvalPsychosis,
  evalTraps,
  setEvalTraps,
  evalAssists,
  setEvalAssists,
  evalEvidence,
  setEvalEvidence,
  evalEvidenceTotal,
  setEvalEvidenceTotal,
  evalDamage,
  setEvalDamage,
  evalIncapacitated,
  setEvalIncapacitated,
  evalUsedRig,
  setEvalUsedRig,
  calculateEvaluationGrade,
  evalGrade,
  actualGameGrade,
  setActualGameGrade
}) {
  return (
    <Paper
      className="crt-border"
      sx={{
        p: { xs: 2, sm: 3 },
        backgroundColor: "background.paper",
        border: "1px solid",
        borderColor: "primary.main",
        borderRadius: 0,
        mb: 3,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
        <Sliders size={20} color={"#1aff43"} />
        <Typography variant="h6" sx={{ fontWeight: "bold", textTransform: "uppercase" }}>
          Interactive Trial Performance Evaluator
        </Typography>
      </Box>
      <Typography variant="body2" sx={{ opacity: 0.7, mb: 3 }}>
        Provide your diagnostics metrics from your latest gameplay trial. Murkoff's algorithms will assess
        your therapy grade status and generate Dr. Easterman's corresponding psychological report.
      </Typography>

      <Grid container spacing={3}>
        {/* Left Parameter Column */}
        <Grid item xs={12} md={6}>
          <Box sx={{ mb: 2.5 }}>
            <Typography variant="caption" sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 0.5 }}>
              <span>TOTAL ELAPSED TIME:</span>
              <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                <input
                  type="number"
                  value={evalTime}
                  onChange={(e) => {
                    const val = Math.max(1, parseInt(e.target.value) || 0);
                    setEvalTime(val);
                  }}
                  min="1"
                  style={{
                    width: "45px",
                    backgroundColor: "rgba(0, 255, 66, 0.07)",
                    border: "1px solid rgba(0, 255, 66, 0.4)",
                    color: "#ffffff",
                    fontSize: "0.75rem",
                    textAlign: "center",
                    fontFamily: "inherit",
                    padding: "2px 0",
                    outline: "none",
                  }}
                />
                <span style={{ fontWeight: "bold", color: "#ffffff", fontSize: "0.72rem" }}>MINUTES</span>
              </Box>
            </Typography>
            <Slider
              value={Math.min(evalTime, Math.max(60, evalTime))}
              onChange={(e, v) => setEvalTime(v)}
              min={1}
              max={Math.max(60, evalTime)}
              step={1}
              size="small"
              color="primary"
            />
          </Box>

          <Box sx={{ mb: 2.5 }}>
            <Typography variant="caption" sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 0.5 }}>
              <span>PSYCHOSIS BREAKS (SANITY EVENTS):</span>
              <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                <input
                  type="number"
                  value={evalPsychosis}
                  onChange={(e) => {
                    const val = Math.max(0, parseInt(e.target.value) || 0);
                    setEvalPsychosis(val);
                  }}
                  min="0"
                  style={{
                    width: "45px",
                    backgroundColor: "rgba(0, 255, 66, 0.07)",
                    border: "1px solid rgba(0, 255, 66, 0.4)",
                    color: "#ffffff",
                    fontSize: "0.75rem",
                    textAlign: "center",
                    fontFamily: "inherit",
                    padding: "2px 0",
                    outline: "none",
                  }}
                />
                <span style={{ fontWeight: "bold", color: "#ffffff", fontSize: "0.72rem" }}>BREAKS</span>
              </Box>
            </Typography>
            <Slider
              value={Math.min(evalPsychosis, Math.max(10, evalPsychosis))}
              onChange={(e, v) => setEvalPsychosis(v)}
              min={0}
              max={Math.max(10, evalPsychosis)}
              step={1}
              size="small"
              color="primary"
            />
          </Box>

          <Box sx={{ mb: 2.5 }}>
            <Typography variant="caption" sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 0.5 }}>
              <span>TRAPS TRIGGERED (INCLUDING PRIME ASSET TRAPS):</span>
              <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                <input
                  type="number"
                  value={evalTraps}
                  onChange={(e) => {
                    const val = Math.max(0, parseInt(e.target.value) || 0);
                    setEvalTraps(val);
                  }}
                  min="0"
                  style={{
                    width: "45px",
                    backgroundColor: "rgba(0, 255, 66, 0.07)",
                    border: "1px solid rgba(0, 255, 66, 0.4)",
                    color: "#ffffff",
                    fontSize: "0.75rem",
                    textAlign: "center",
                    fontFamily: "inherit",
                    padding: "2px 0",
                    outline: "none",
                  }}
                />
                <span style={{ fontWeight: "bold", color: "#ffffff", fontSize: "0.72rem" }}>TRIGGERS</span>
              </Box>
            </Typography>
            <Slider
              value={Math.min(evalTraps, Math.max(30, evalTraps))}
              onChange={(e, v) => setEvalTraps(v)}
              min={0}
              max={Math.max(30, evalTraps)}
              step={1}
              size="small"
              color="primary"
            />
          </Box>

          <Box sx={{ mb: 2.5 }}>
            <Typography variant="caption" sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 0.5 }}>
              <span>INCAPACITATED:</span>
              <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                <input
                  type="number"
                  value={evalIncapacitated}
                  onChange={(e) => {
                    const val = Math.max(0, parseInt(e.target.value) || 0);
                    setEvalIncapacitated(val);
                  }}
                  min="0"
                  style={{
                    width: "45px",
                    backgroundColor: "rgba(0, 255, 66, 0.07)",
                    border: "1px solid rgba(0, 255, 66, 0.4)",
                    color: "#ffffff",
                    fontSize: "0.75rem",
                    textAlign: "center",
                    fontFamily: "inherit",
                    padding: "2px 0",
                    outline: "none",
                  }}
                />
                <span style={{ fontWeight: "bold", color: "#ffffff", fontSize: "0.72rem" }}>TIMES</span>
              </Box>
            </Typography>
            <Slider
              value={Math.min(evalIncapacitated, Math.max(10, evalIncapacitated))}
              onChange={(e, v) => setEvalIncapacitated(v)}
              min={0}
              max={Math.max(10, evalIncapacitated)}
              step={1}
              size="small"
              color="primary"
            />
          </Box>
        </Grid>

        {/* Right Parameter Column */}
        <Grid item xs={12} md={6}>
          <Box sx={{ mb: 2.5 }}>
            <Typography variant="caption" sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 0.5 }}>
              <span>TEAMMATES CO-OP RESCUED / RECOVERED:</span>
              <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                <input
                  type="number"
                  value={evalAssists}
                  onChange={(e) => {
                    const val = Math.max(0, parseInt(e.target.value) || 0);
                    setEvalAssists(val);
                  }}
                  min="0"
                  style={{
                    width: "45px",
                    backgroundColor: "rgba(0, 255, 66, 0.07)",
                    border: "1px solid rgba(0, 255, 66, 0.4)",
                    color: "#ffffff",
                    fontSize: "0.75rem",
                    textAlign: "center",
                    fontFamily: "inherit",
                    padding: "2px 0",
                    outline: "none",
                  }}
                />
                <span style={{ fontWeight: "bold", color: "#ffffff", fontSize: "0.72rem" }}>ASSISTS</span>
              </Box>
            </Typography>
            <Slider
              value={Math.min(evalAssists, Math.max(8, evalAssists))}
              onChange={(e, v) => setEvalAssists(v)}
              min={0}
              max={Math.max(8, evalAssists)}
              step={1}
              size="small"
              color="primary"
            />
          </Box>

          <Box sx={{ mb: 2.5 }}>
            <Typography variant="caption" sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 0.5 }}>
              <span>SECRET DOCUMENTS SECURED:</span>
              <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                <input
                  type="number"
                  value={evalEvidence}
                  onChange={(e) => {
                    const val = Math.max(0, parseInt(e.target.value) || 0);
                    setEvalEvidence(val);
                  }}
                  min="0"
                  style={{
                    width: "35px",
                    backgroundColor: "rgba(0, 255, 66, 0.07)",
                    border: "1px solid rgba(0, 255, 66, 0.4)",
                    color: "#ffffff",
                    fontSize: "0.75rem",
                    textAlign: "center",
                    fontFamily: "inherit",
                    padding: "2px 0",
                    outline: "none",
                  }}
                />
                <span style={{ color: "rgba(0, 255, 66, 0.6)" }}>/</span>
                <input
                  type="number"
                  value={evalEvidenceTotal}
                  onChange={(e) => {
                    const val = Math.max(1, parseInt(e.target.value) || 1);
                    setEvalEvidenceTotal(val);
                  }}
                  min="1"
                  style={{
                    width: "35px",
                    backgroundColor: "rgba(0, 255, 66, 0.07)",
                    border: "1px solid rgba(0, 255, 66, 0.4)",
                    color: "#ffffff",
                    fontSize: "0.75rem",
                    textAlign: "center",
                    fontFamily: "inherit",
                    padding: "2px 0",
                    outline: "none",
                  }}
                />
                <span style={{ fontWeight: "bold", color: "#ffffff", fontSize: "0.72rem", marginLeft: "4px" }}>CLUES</span>
              </Box>
            </Typography>
            <Slider
              value={Math.min(evalEvidence, evalEvidenceTotal)}
              onChange={(e, v) => setEvalEvidence(v)}
              min={0}
              max={evalEvidenceTotal}
              step={1}
              size="small"
              color="primary"
            />
          </Box>

          <Box sx={{ mb: 2.5 }}>
            <Typography variant="caption" sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 0.5 }}>
              <span>USED RIG:</span>
              <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                <input
                  type="number"
                  value={evalUsedRig}
                  onChange={(e) => {
                    const val = Math.max(0, parseInt(e.target.value) || 0);
                    setEvalUsedRig(val);
                  }}
                  min="0"
                  style={{
                    width: "45px",
                    backgroundColor: "rgba(0, 255, 66, 0.07)",
                    border: "1px solid rgba(0, 255, 66, 0.4)",
                    color: "#ffffff",
                    fontSize: "0.75rem",
                    textAlign: "center",
                    fontFamily: "inherit",
                    padding: "2px 0",
                    outline: "none",
                  }}
                />
                <span style={{ fontWeight: "bold", color: "#ffffff", fontSize: "0.72rem" }}>USES</span>
              </Box>
            </Typography>
            <Slider
              value={Math.min(evalUsedRig, Math.max(15, evalUsedRig))}
              onChange={(e, v) => setEvalUsedRig(v)}
              min={0}
              max={Math.max(15, evalUsedRig)}
              step={1}
              size="small"
              color="primary"
            />
          </Box>

          {/* Damage Level Radio Selector */}
          <Box sx={{ mb: 1 }}>
            <Typography variant="caption" sx={{ display: "block", mb: 0.5 }}>
              PHYSICAL TRAUMA SUSTAINED:
            </Typography>
            <RadioGroup
              row
              value={evalDamage}
              onChange={(e) => setEvalDamage(e.target.value)}
              sx={{ gap: { xs: 0.5, sm: 1 }, flexWrap: "wrap" }}
            >
              {["minor", "moderate", "severe", "critical", "kia"].map((lvl) => (
                <FormControlLabel
                  key={lvl}
                  value={lvl}
                  control={<Radio size="small" />}
                  label={lvl === "kia" ? "KIA (KILLED IN ACTION)" : lvl.toUpperCase()}
                  sx={{
                    "& .MuiFormControlLabel-label": { fontSize: "0.65rem", fontWeight: "bold" },
                  }}
                />
              ))}
            </RadioGroup>
          </Box>

          {/* Actual In-Game Grade Dropdown selector */}
          <Box sx={{ mt: 1, mb: 1, borderTop: "1px dashed rgba(0, 255, 66, 0.2)", pt: 1.5 }}>
            <Typography variant="caption" sx={{ display: "block", mb: 0.5, color: "#ffa114", fontWeight: "bold" }}>
              ORIGINAL FIELD REPORT (COMPARE VS. YOUR ACTUAL IN-GAME TRIAL GRADE):
            </Typography>
            <select
              value={actualGameGrade}
              onChange={(e) => setActualGameGrade(e.target.value)}
              style={{
                width: "100%",
                backgroundColor: "rgba(0, 255, 66, 0.05)",
                border: "1px solid rgba(0, 255, 66, 0.4)",
                color: "#1aff43",
                fontSize: "0.75rem",
                fontWeight: "bold",
                padding: "6px 10px",
                fontFamily: "inherit",
                cursor: "pointer",
                outline: "none",
                borderRadius: 0,
              }}
            >
              <option value="" style={{ backgroundColor: "#032005", color: "rgba(26, 255, 67, 0.5)" }}>
                -- INPUT YOUR OFFICIAL IN-GAME GRADE TO COMPARE --
              </option>
              {["A+", "A", "A-", "B+", "B", "B-", "C+", "C", "C-", "D+", "D", "D-", "F"].map((g) => (
                <option key={g} value={g} style={{ backgroundColor: "#032005", color: "#1aff43" }}>
                  MY IN-GAME REAL GRADE: {g}
                </option>
              ))}
            </select>
          </Box>
        </Grid>
      </Grid>

      <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
        <Button
          variant="contained"
          color="primary"
          startIcon={<RefreshCw size={16} />}
          onClick={calculateEvaluationGrade}
          fullWidth
          sx={{
            fontWeight: "bold",
            py: 1,
            textTransform: "uppercase",
            color: "#000000",
          }}
        >
          CALCULATE REAGENT THERAPY THERMOGRAPHY STATUS
        </Button>
      </Box>

      {/* Grade Performance Overlay Display */}
      {evalGrade && (
        <Box
          sx={{
            mt: 3,
            p: 2,
            border: "1px dashed",
            borderColor: evalGrade.color,
            backgroundColor: "rgba(2, 10, 3, 0.9)",
          }}
        >
          <Grid container spacing={2} sx={{ alignItems: "center" }}>
            <Grid item xs={12} sm={3} sx={{ textAlign: "center" }}>
              <Typography variant="caption" sx={{ display: "block", opacity: 0.6 }}>
                OVERALL EVAL
              </Typography>
              <Typography
                variant="h1"
                sx={{
                  fontFamily: '"Share Tech Mono", monospace',
                  fontWeight: 900,
                  lineHeight: 1,
                  color: evalGrade.color,
                  textShadow: `0 0 12px ${evalGrade.color}`,
                }}
              >
                {evalGrade.grade}
              </Typography>
              <Typography variant="caption" sx={{ display: "block", fontWeight: "bold" }}>
                SCORE: {evalGrade.score}/100
              </Typography>
            </Grid>
            <Grid item xs={12} sm={9}>
              <Box sx={{ display: "flex", gap: 1, alignItems: "center", mb: 0.5 }}>
                <CheckSquare size={14} color={evalGrade.color} />
                <Typography variant="subtitle2" sx={{ fontWeight: "bold", color: evalGrade.color }}>
                  MURKOFF STAFF PSYCHOLOGIST VERDICT
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ fontStyle: "italic", color: "#ffffff", opacity: 0.9 }}>
                "{evalGrade.comment}"
              </Typography>
            </Grid>
          </Grid>

          {/* Actual In-Game Grade Comparison Panel */}
          {actualGameGrade && (
            <Box
              sx={{
                mt: 2,
                pt: 2,
                borderTop: "1px dashed rgba(26, 255, 67, 0.2)",
              }}
            >
              <Grid container spacing={2} sx={{ alignItems: "center" }}>
                <Grid item xs={12} sm={3} sx={{ textAlign: "center" }}>
                  <Typography variant="caption" sx={{ display: "block", opacity: 0.6 }}>
                    ACTUAL IN-GAME
                  </Typography>
                  <Typography
                    variant="h3"
                    sx={{
                      fontFamily: '"Share Tech Mono", monospace',
                      fontWeight: 900,
                      color: "#ffa114",
                      textShadow: "0 0 8px #ffa114",
                    }}
                  >
                    {actualGameGrade}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={9}>
                  {(() => {
                    const verdict = getComparisonVerdict(evalGrade.grade, actualGameGrade);
                    return (
                      <Box>
                        <Typography
                          variant="caption"
                          sx={{
                            display: "inline-block",
                            px: 1,
                            py: 0.2,
                            backgroundColor: "rgba(0,0,0,0.5)",
                            border: `1px solid ${verdict.color}`,
                            fontSize: "0.65rem",
                            fontWeight: "bold",
                            color: verdict.color,
                            mb: 1,
                            letterSpacing: "1.2px",
                          }}
                        >
                          {verdict.status}
                        </Typography>
                        <Typography variant="body2" sx={{ color: "rgba(255, 255, 255, 0.8)", fontSize: "0.75rem", fontStyle: "italic" }}>
                          "{verdict.text}"
                        </Typography>
                      </Box>
                    );
                  })()}
                </Grid>
              </Grid>
            </Box>
          )}
        </Box>
      )}
    </Paper>
  );
}

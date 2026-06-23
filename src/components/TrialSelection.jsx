import React from "react";
import { Box, Typography, Paper, Chip, Button } from "@mui/material";
import { Search } from "lucide-react";
import { MAPS_DATA } from "../data";

export default function TrialSelection({
  searchQuery,
  setSearchQuery,
  filterType,
  setFilterType,
  handleTick,
  selectedMapId,
  nightVision,
  selectedActivity,
  handleSelectActivity,
}) {
  return (
    <Paper
      className="crt-border"
      sx={{
        backgroundColor: "background.paper",
        border: "1px solid",
        borderColor: "primary.main",
        borderRadius: 0,
        overflow: "hidden",
        mb: 3,
      }}
    >
      {/* Table Header mimicking image header */}
      <Box
        sx={{
          px: 3,
          py: 1.5,
          backgroundColor: "#031505",
          borderBottom: "2px solid",
          borderColor: "primary.main",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Typography
            variant="body1"
            sx={{
              fontWeight: "bold",
              textTransform: "uppercase",
              letterSpacing: 1.5,
              color: "primary.main",
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            Trials <span style={{ color: "#ffffff", fontWeight: "normal" }}>and</span> MK-Challenges{" "}
            <span style={{ color: "#ffffff", fontStyle: "italic" }}>in The Outlast Trials</span>
          </Typography>
        </Box>
        <Chip
          size="small"
          label={`${MAPS_DATA.reduce((acc, m) => acc + m.activities.length, 0)} Protocols Loaded`}
          variant="outlined"
          color="primary"
          sx={{ fontSize: "0.65rem", height: 18 }}
        />
      </Box>

      {/* Filter and search controllers */}
      <Box
        sx={{
          p: 1.5,
          backgroundColor: "#010c03",
          borderBottom: "1px solid",
          borderColor: "rgba(0, 255, 66, 0.2)",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: 2,
        }}
      >
        {/* Search Bar */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, flexGrow: 1, minWidth: 200 }}>
          <Search size={14} style={{ color: "#1aff43" }} />
          <input
            type="text"
            placeholder="ENTER TARGET SEARCH FOR COYLE, BAPTISM, CLUTTER..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              background: "transparent",
              border: "none",
              outline: "none",
              color: "#1aff43",
              width: "100%",
              fontSize: "0.8rem",
              fontFamily: '"Share Tech Mono", monospace',
            }}
          />
        </Box>

        {/* Filter Select Tab */}
        <Box sx={{ display: "flex", gap: 1 }}>
          {["all", "trials", "mk"].map((t) => (
            <Button
              key={t}
              size="small"
              onClick={() => {
                handleTick();
                setFilterType(t);
              }}
              sx={{
                fontSize: "0.65rem",
                color: filterType === t ? "#ffffff" : "primary.main",
                backgroundColor: filterType === t ? "primary.main" : "transparent",
                px: 1,
                py: 0.2,
                "&:hover": {
                  backgroundColor: "rgba(26, 255, 67, 0.2)",
                  color: "#ffffff",
                },
              }}
            >
              {t === "all" ? "[ALL]" : t === "trials" ? "[TRIALS ONLY]" : "[MK CHALLENGES]"}
            </Button>
          ))}
        </Box>
      </Box>

      {/* Main Interactive Table Grid (visible on tablet and desktop screens) */}
      <Box sx={{ display: { xs: "none", sm: "block" } }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.85rem" }}>
          <tbody>
            {MAPS_DATA.map((map) => {
              // Check if current search matches or contains
              const mapNameMatched = map.name.toLowerCase().includes(searchQuery.toLowerCase());
              const matchedActs = map.activities.filter((act) => {
                const matchesName = act.name.toLowerCase().includes(searchQuery.toLowerCase());
                const matchesType =
                  filterType === "all" ||
                  (filterType === "trials" && act.type === "Trial") ||
                  (filterType === "mk" && act.type === "MK-Challenge");
                return (matchesName || mapNameMatched) && matchesType;
              });

              // If no activities matched, skip map row
              if (matchedActs.length === 0) return null;

              return (
                <tr
                  key={map.id}
                  style={{
                    borderBottom: "1px solid #005a11",
                    backgroundColor: selectedMapId === map.id ? "rgba(26, 255, 67, 0.03)" : "transparent",
                  }}
                >
                  {/* Map Identifier Column (Left Column) */}
                  <td
                    style={{
                      width: "135px",
                      minWidth: "120px",
                      verticalAlign: "middle",
                      textAlign: "center",
                      borderRight: "1px solid #005a11",
                      padding: "12px 6px",
                      color: selectedMapId === map.id ? "#ffffff" : (nightVision ? "#c8d926" : "#89f196"),
                      backgroundColor: selectedMapId === map.id ? "#032209" : "#020f04",
                      fontWeight: "bold",
                      textTransform: "uppercase",
                      fontFamily: '"Share Tech Mono", monospace',
                    }}
                  >
                    <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                      {map.name}
                    </Typography>
                    {selectedMapId === map.id && (
                      <Box
                        sx={{
                          mt: 0.5,
                          fontSize: "0.55rem",
                          color: "primary.main",
                          border: "1px dashed",
                          borderColor: "primary.main",
                          py: 0.1,
                          px: 0.5,
                        }}
                      >
                        HIGHLIGHTED
                      </Box>
                    )}
                  </td>

                  {/* Trial Activity List Column (Right Column) */}
                  <td style={{ padding: "12px 16px", lineHeight: "1.8" }}>
                    <Box sx={{ display: "flex", flexWrap: "wrap", alignItems: "center", rowGap: 0.5, columnGap: 1.5 }}>
                      {map.activities.map((act, index) => {
                        const isSelected = selectedActivity?.name === act.name;
                        const matchesFilter = matchedActs.some((ma) => ma.name === act.name);

                        return (
                          <React.Fragment key={act.name}>
                            <span
                              onClick={() => handleSelectActivity(act, map.id)}
                              style={{
                                cursor: "pointer",
                                color: isSelected ? "#ffffff" : matchesFilter ? "#1aff43" : "#005e13",
                                fontWeight: isSelected ? "bold" : "normal",
                                textDecoration: isSelected ? "underline" : "none",
                                padding: "1px 6px",
                                borderRadius: "2px",
                                backgroundColor: isSelected ? "rgba(26, 255, 67, 0.2)" : "transparent",
                                border: isSelected ? "1px solid #1aff43" : "1px solid transparent",
                                transition: "all 0.15s ease",
                                opacity: matchesFilter ? 1 : 0.4,
                                fontSize: isSelected ? "0.95rem" : "0.85rem",
                              }}
                              className={isSelected ? "crt-glow" : ""}
                              title={`Launch dossier for ${act.name}`}
                            >
                              {act.name}
                            </span>
                            {index < map.activities.length - 1 && (
                              <span style={{ color: "#1aff43", opacity: 0.35 }}> • </span>
                            )}
                          </React.Fragment>
                        );
                      })}
                    </Box>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Box>

      {/* Mobile-Friendly List Layout (visible on small mobile screens to prevent horizontal overflow) */}
      <Box sx={{ display: { xs: "block", sm: "none" } }}>
        {MAPS_DATA.map((map) => {
          const mapNameMatched = map.name.toLowerCase().includes(searchQuery.toLowerCase());
          const matchedActs = map.activities.filter((act) => {
            const matchesName = act.name.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesType =
              filterType === "all" ||
              (filterType === "trials" && act.type === "Trial") ||
              (filterType === "mk" && act.type === "MK-Challenge");
            return (matchesName || mapNameMatched) && matchesType;
          });

          if (matchedActs.length === 0) return null;

          return (
            <Box
              key={map.id}
              sx={{
                borderBottom: "1px solid rgba(0, 90, 17, 0.4)",
                backgroundColor: selectedMapId === map.id ? "rgba(26, 255, 67, 0.03)" : "transparent",
              }}
            >
              {/* Mobile Header / Title bar for this Map */}
              <Box
                sx={{
                  px: 2,
                  py: 1.5,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  backgroundColor: selectedMapId === map.id ? "#032209" : "#020f04",
                  borderBottom: "1px solid rgba(0, 90, 17, 0.3)",
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: "bold",
                    textTransform: "uppercase",
                    fontFamily: '"Share Tech Mono", monospace',
                    color: selectedMapId === map.id ? "#ffffff" : (nightVision ? "#c8d926" : "#89f196"),
                  }}
                >
                  {map.name}
                </Typography>
                {selectedMapId === map.id && (
                  <Box
                    sx={{
                      fontSize: "0.55rem",
                      color: "primary.main",
                      border: "1px dashed",
                      borderColor: "primary.main",
                      py: 0.1,
                      px: 0.5,
                    }}
                  >
                    HIGHLIGHTED
                  </Box>
                )}
              </Box>

              {/* Mobile touch-friendly items */}
              <Box sx={{ p: 1.5, display: "flex", flexDirection: "column", gap: 1 }}>
                {map.activities.map((act) => {
                  const isSelected = selectedActivity?.name === act.name;
                  const matchesFilter = matchedActs.some((ma) => ma.name === act.name);

                  return (
                    <Box
                      key={act.name}
                      onClick={() => handleSelectActivity(act, map.id)}
                      sx={{
                        cursor: "pointer",
                        p: 1.25,
                        border: isSelected ? "1px solid #1aff43" : "1px solid rgba(0, 90, 17, 0.25)",
                        backgroundColor: isSelected ? "rgba(26, 255, 67, 0.12)" : "rgba(2, 15, 4, 0.5)",
                        borderRadius: "1px",
                        opacity: matchesFilter ? 1 : 0.4,
                        transition: "all 0.15s ease",
                        display: matchesFilter ? "block" : "none",
                      }}
                    >
                      <Typography
                        variant="body2"
                        sx={{
                          fontWeight: isSelected ? "bold" : "normal",
                          color: isSelected ? "#ffffff" : "#1aff43",
                          fontFamily: '"Share Tech Mono", monospace',
                          fontSize: "0.82rem",
                        }}
                      >
                        {act.name}
                      </Typography>
                      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mt: 0.5 }}>
                        <Typography
                          variant="caption"
                          sx={{
                            color: act.type === "Trial" ? "secondary.main" : "primary.main",
                            fontSize: "0.62rem",
                            fontWeight: "bold",
                          }}
                        >
                          {act.type.toUpperCase()}
                        </Typography>
                        <Typography
                          variant="caption"
                          sx={{
                            color: "rgba(255,255,255,0.4)",
                            fontSize: "0.62rem",
                          }}
                        >
                          DIFF: {act.difficulty}/5
                        </Typography>
                      </Box>
                    </Box>
                  );
                })}
              </Box>
            </Box>
          );
        })}
      </Box>
    </Paper>
  );
}

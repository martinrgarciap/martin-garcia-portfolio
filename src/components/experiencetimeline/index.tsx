"use client";

import { SectionCard } from "@/components";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";
import { Link as MuiLink, Typography } from "@mui/material";
import { alpha } from "@mui/material/styles";

export type TimelineEntry = {
  title: string;
  org: string;
  date: string;
  bullets: string[];
};

const ExperienceTimeline = ({ items }: { items: TimelineEntry[] }) => (
  <SectionCard
    sx={{
      p: { xs: 2, md: 3 },
      width: "100%",
      flex: 1, 
      minHeight: 0, 
    }}
  >
    <Timeline
      sx={{
        m: 0,
        p: 0,
        [`& .MuiTimelineItem-root:before`]: { flex: 0, padding: 0 },
      }}
    >
      {items.map((it, idx) => (
        <TimelineItem key={`${it.title}-${idx}`}>
          <TimelineSeparator>
            <TimelineDot
              sx={{
                bgcolor: alpha("#3B82F6", 0.35),
                borderColor: alpha("#3B82F6", 0.8),
                borderWidth: 1,
                borderStyle: "solid",
              }}
            />
            {idx !== items.length - 1 && (
              <TimelineConnector sx={{ bgcolor: alpha("#FFFFFF", 0.1) }} />
            )}
          </TimelineSeparator>

          <TimelineContent sx={{ pb: 3 }}>
            <Typography sx={{ fontWeight: 800 }}>
              {it.title}{" "}
              <Typography
                component="span"
                sx={{ color: "text.secondary", fontWeight: 600 }}
              >
                — {it.org}
              </Typography>
            </Typography>
            <Typography variant="caption" sx={{ color: "text.secondary" }}>
              {it.date}
            </Typography>

            <MuiLink component="div" underline="none" sx={{ mt: 1.4 }}>
              <ul style={{ margin: 0, paddingLeft: 18 }}>
                {it.bullets.map((b) => (
                  <li key={b} style={{ marginBottom: 6 }}>
                    <Typography sx={{ color: "text.secondary" }}>
                      {b}
                    </Typography>
                  </li>
                ))}
              </ul>
            </MuiLink>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  </SectionCard>
);

export default ExperienceTimeline;

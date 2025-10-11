import React from "react";
import { Document, Page, View, Text, StyleSheet } from "@react-pdf/renderer";

import type { ResumeData } from "./Resume.types";

type ResumePdfDocumentProps = {
  data: ResumeData;
};

const styles = StyleSheet.create({
  page: {
    padding: 32,
    backgroundColor: "#f8fafc",
    fontFamily: "Helvetica",
    fontSize: 10,
    color: "#1e293b",
  },
  header: {
    backgroundColor: "#0f172a",
    color: "white",
    borderRadius: 16,
    padding: 24,
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 600,
  },
  headerSubtitle: {
    fontSize: 12,
    marginTop: 4,
    color: "#cbd5f5",
  },
  headerTagline: {
    fontSize: 10,
    marginTop: 12,
    lineHeight: 1.4,
  },
  layout: {
    display: "flex",
    flexDirection: "row",
    gap: 16,
  },
  sidebar: {
    width: "34%",
    display: "flex",
    flexDirection: "column",
    gap: 16,
  },
  content: {
    width: "66%",
    display: "flex",
    flexDirection: "column",
    gap: 16,
  },
  section: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 16,
    borderColor: "#e2e8f0",
    borderWidth: 1,
  },
  sectionTitle: {
    fontSize: 9,
    textTransform: "uppercase",
    letterSpacing: 1.5,
    color: "#64748b",
    marginBottom: 8,
  },
  sectionDescription: {
    fontSize: 9,
    color: "#475569",
    marginBottom: 8,
    lineHeight: 1.4,
  },
  contactItem: {
    marginBottom: 8,
  },
  contactLabel: {
    fontSize: 9,
    fontWeight: 600,
  },
  contactValue: {
    fontSize: 9,
    color: "#475569",
  },
  bullet: {
    fontSize: 9,
    lineHeight: 1.5,
    marginBottom: 6,
  },
  list: {
    marginTop: 4,
  },
  tagContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
  },
  tag: {
    borderRadius: 9999,
    borderColor: "#bae6fd",
    borderWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 4,
    fontSize: 8,
    color: "#0369a1",
  },
  experienceHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginBottom: 4,
  },
  experienceTitle: {
    fontSize: 11,
    fontWeight: 600,
  },
  experienceMeta: {
    fontSize: 9,
    color: "#475569",
  },
  period: {
    fontSize: 8,
    color: "#94a3b8",
  },
  projectCard: {
    borderRadius: 12,
    borderColor: "#e2e8f0",
    borderWidth: 1,
    padding: 12,
    marginBottom: 12,
    backgroundColor: "white",
  },
  projectTitle: {
    fontSize: 11,
    fontWeight: 600,
    color: "#0f172a",
  },
  projectSubtitle: {
    fontSize: 9,
    color: "#0d9488",
    marginTop: 2,
  },
  projectDescription: {
    fontSize: 9,
    color: "#475569",
    marginTop: 4,
  },
});

const ResumePdfDocument = ({ data }: ResumePdfDocumentProps) => (
  <Document>
    <Page size="A4" style={styles.page} wrap>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{data.profile.name}</Text>
        <Text style={styles.headerSubtitle}>{data.profile.title}</Text>
        <Text style={styles.headerTagline}>{data.profile.banner}</Text>
      </View>

      <View style={styles.layout} wrap={false}>
        <View style={styles.sidebar}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Contact</Text>
            {data.contacts.map((contact) => (
              <View key={contact.id} style={styles.contactItem}>
                <Text style={styles.contactLabel}>{contact.label}</Text>
                <Text style={styles.contactValue}>{contact.value}</Text>
              </View>
            ))}
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Skills Matrix</Text>
            {data.skillGroups.map((group) => (
              <View key={group.id} style={{ marginBottom: 8 }}>
                <Text
                  style={{
                    fontSize: 9,
                    fontWeight: 600,
                    color: group.highlight ? "#047857" : "#1e293b",
                    marginBottom: 4,
                  }}
                >
                  {group.title}
                </Text>
                <View style={styles.list}>
                  {group.skills.map((skill) => (
                    <Text key={skill} style={styles.bullet}>
                      • {skill}
                    </Text>
                  ))}
                </View>
              </View>
            ))}
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Education</Text>
            {data.education.map((edu) => (
              <View key={edu.id} style={{ marginBottom: 8 }}>
                <Text style={{ fontSize: 10, fontWeight: 600 }}>
                  {edu.degree}
                </Text>
                <Text style={styles.contactValue}>{edu.school}</Text>
                <Text style={styles.period}>
                  {edu.location} · {edu.year}
                </Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.content}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Executive Summary</Text>
            <Text style={styles.sectionDescription}>{data.summary}</Text>
          </View>

          {data.technicalHighlights.length > 0 && (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Technical Highlights</Text>
              <View style={styles.tagContainer}>
                {data.technicalHighlights.map((item) => (
                  <Text key={item} style={styles.tag}>
                    {item}
                  </Text>
                ))}
              </View>
            </View>
          )}

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Work History</Text>
            {data.experiences.map((experience) => (
              <View key={experience.id} style={{ marginBottom: 10 }}>
                <View style={styles.experienceHeader}>
                  <View>
                    <Text style={styles.experienceTitle}>
                      {experience.role}
                    </Text>
                    <Text style={styles.experienceMeta}>
                      {experience.company} · {experience.location}
                    </Text>
                  </View>
                  <Text style={styles.period}>{experience.period}</Text>
                </View>
                <View style={styles.list}>
                  {experience.achievements.map((achievement) => (
                    <Text key={achievement} style={styles.bullet}>
                      • {achievement}
                    </Text>
                  ))}
                </View>
              </View>
            ))}
          </View>

          {data.projectGroups.map((group) => (
            <View key={group.id} style={styles.section}>
              <Text style={styles.sectionTitle}>{group.title}</Text>
              {group.projects.map((project) => (
                <View key={project.id} style={styles.projectCard} wrap={false}>
                  <Text style={styles.projectTitle}>{project.name}</Text>
                  <Text style={styles.projectSubtitle}>{project.subtitle}</Text>
                  <Text style={styles.projectDescription}>
                    {project.description}
                  </Text>
                  <View style={{ marginTop: 6 }}>
                    {project.focus.map((item) => (
                      <Text key={item} style={styles.bullet}>
                        • {item}
                      </Text>
                    ))}
                  </View>
                  <View style={[styles.tagContainer, { marginTop: 6 }]}>
                    {project.techStack.map((tech) => (
                      <Text key={tech} style={styles.tag}>
                        {tech}
                      </Text>
                    ))}
                  </View>
                </View>
              ))}
            </View>
          ))}
        </View>
      </View>
    </Page>
  </Document>
);

export default ResumePdfDocument;

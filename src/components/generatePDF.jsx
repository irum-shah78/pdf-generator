import React from "react";
import {
  Document,
  Page,
  StyleSheet,
  Image,
  Text,
  View,
  pdf,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  footer: {
    position: "absolute",
    bottom: 10,
    left: 0,
    right: 0,
    textAlign: "center",
    fontSize: 10,
  },
  // Page 1
  page1: {
    position: "relative",
    padding: 30,
    fontSize: 12,
    backgroundColor: "#EEFFF2",
  },
  background: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: -1,
    opacity: 0.1,
  },
  logo: {
    position: "absolute",
    top: 10,
    right: 10,
    width: 100,
    height: 40,
  },
  centerContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  coverPage: {
    fontSize: 24,
    textAlign: "center",
    marginTop: 50,
    color: "#2A9D8F",
    fontWeight: "bold",
  },
  // Page 2
  page2: {
    position: "relative",
    padding: 28,
    fontSize: 12,
    backgroundColor: "#EEFFF2",
    display: "flex",
    flexDirection: "column",
    gap: 24,
  },
  heading: {
    fontSize: 20,
    fontWeight: "extrabold",
  },
  description: {
    fontSize: 12,
    color: "#3E3F3E",
  },
  contents: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    flexWrap: "wrap",
    marginTop: 10,
    gap: 40,
  },
  column: {
    width: "200px",
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "extrabold",
    color: "#06601D",
    marginBottom: 5,
  },
  horizontalLine: {
    width: "127px",
    height: 3,
    backgroundColor: "#06601D",
    marginBottom: 15,
  },
  item: {
    fontSize: 12,
    lineHeight: 1.5,
    color: "#3E3F3E",
  },
  number: {
    color: "#3E3F3E",
    fontWeight: "bold",
    marginRight: 5,
  },
  // Page 3
  page3: {
    position: "relative",
    padding: 30,
    fontSize: 12,
    display: "flex",
    flexDirection: "column",
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subHeader: {
    fontSize: 12,
    color: "#666",
    marginBottom: 20,
    textAlign: "justify",
  },
  table: {
    backgroundColor: "#EEFFF2",
    overflow: "hidden",
  },
  tableHeader: {
    flexDirection: "row",
    backgroundColor: "#06601D",
    paddingVertical: 5,
    paddingHorizontal: 3,
  },
  tableHeaderText: {
    fontWeight: "bold",
    color: "#ffffff",
    fontSize: 10,
  },
  tableRow1: {
    flexDirection: "row",
    backgroundColor: "#D8FDE1",
  },
  tableRow: {
    flexDirection: "row",
    paddingVertical: 6,
  },
  tableCell1: {
    color: "#0A0B0A",
    fontSize: 10,
    fontWeight: 700,
    textAlign: "left",
    paddingVertical: 4,
    paddingHorizontal: 3,
  },
  tableCell2: {
    backgroundColor: "#8BF9A6",
    fontSize: 10,
    fontWeight: 700,
    textAlign: "left",
    paddingVertical: 4,
    paddingHorizontal: 3,
  },
  tableCell: {
    color: "#101010",
    fontSize: 10,
    paddingHorizontal: 5,
    textAlign: "left",
  },
  // Page 4
  page4: {
    position: "relative",
    padding: 30,
    fontSize: 12,
    display: "flex",
    flexDirection: "column",
  },
  table4: {
    backgroundColor: "#E9EEFF",
    overflow: "hidden",
  },
  tableHeader4: {
    flexDirection: "row",
    backgroundColor: "#0030CF",
    paddingVertical: 5,
    paddingHorizontal: 3,
  },
  tableRow3: {
    flexDirection: "row",
    backgroundColor: "#CAD6FF",
  },
  tableCell3: {
    color: "#0A0B0A",
    fontSize: 10,
    fontWeight: 700,
    textAlign: "left",
    paddingVertical: 4,
    paddingHorizontal: 3,
  },
  tableRow4: {
    flexDirection: "row",
    backgroundColor: "#8DA8FF",
  },
  tableCell4: {
    color: "#0A0B0A",
    fontSize: 10,
    fontWeight: 700,
    textAlign: "left",
    paddingVertical: 4,
    paddingHorizontal: 3,
  },

  // Page 5
  page5: {
    position: "relative",
    padding: 30,
    fontSize: 12,
    display: "flex",
    flexDirection: "column",
  },
  table5: {
    backgroundColor: "#FFF2E1",
    overflow: "hidden",
  },
  tableHeader5: {
    flexDirection: "row",
    backgroundColor: "#EA8508",
    paddingVertical: 5,
    paddingHorizontal: 3,
  },
  tableRow5: {
    flexDirection: "row",
    backgroundColor: "#FFE3C1",
  },
  tableCell5: {
    color: "#0A0B0A",
    fontSize: 10,
    fontWeight: 700,
    textAlign: "left",
    paddingVertical: 4,
    paddingHorizontal: 3,
  },
  tableRow6: {
    flexDirection: "row",
    backgroundColor: "#F9C380",
  },
  tableCell6: {
    color: "#0A0B0A",
    fontSize: 10,
    fontWeight: 700,
    textAlign: "left",
    paddingVertical: 4,
    paddingHorizontal: 3,
  },
});

const PDFDocument = ({ data }) => (
  <Document>
    {/* Page 1 */}
    <Page size="A4" style={styles.page1}>
      <View style={styles.centerContent}>
        <Text style={styles.content}>GLOBAL SUSTAINABILITY REPORT 2024</Text>
      </View>
      <Text
        style={styles.footer}
        render={({ pageNumber, totalPages }) =>
          `Page ${pageNumber} of ${totalPages}`
        }
      />
    </Page>

    {/* Page 2 */}
    <Page size="A4" style={styles.page2}>
      <Text style={styles.heading}>Company Summary</Text>
      <Text style={styles.description}>
        Sirius Impact is a Singapore-based company dedicated to advancing
        Environmental, Social, and Governance (ESG) solutions. We empower
        organizations to integrate sustainable practices, improve social
        responsibility, and uphold ethical governance. Through tailored
        strategies and innovative tools, Sirius Impact helps clients achieve
        measurable ESG outcomes, aligning business success with a positive
        impact on communities and the environment.
      </Text>

      <Text style={styles.heading}>Board of Statement</Text>
      <Text style={styles.description}>
        Our commitment to Environmental, Social, and Governance (ESG) principles
        drives every aspect of our business. As a company dedicated to
        sustainable progress, we believe that integrating responsible practices
        into business operations is essential for long-term success and positive
        societal impact. Our board is fully engaged in promoting transparency,
        fostering inclusivity, and upholding the highest standards of ethical
        governance. Together with our partners, we strive to build a future
        where business success is aligned with meaningful contributions to
        society and the environment
      </Text>

      <Text style={styles.heading}>Stakeholder Engangement</Text>
      <Text style={styles.description}>
        At Sirius Impact, stakeholder engagement forms the foundation of our
        commitment to environmental, social, and governance (ESG) principles.
        Based in Singapore, we recognize the importance of fostering transparent
        and constructive relationships with our stakeholders, which include
        investors, employees, customers, local communities, regulatory bodies,
        and environmental advocates. Our engagement approach is proactive and
        inclusive, prioritizing open communication to understand and address the
        diverse needs and expectations of each stakeholder group.
      </Text>

      <Text style={styles.heading}>Table of Contents</Text>
      <View style={styles.contents}>
        <View style={styles.column}>
          <Text style={styles.sectionTitle}>Introduction</Text>
          <View style={styles.horizontalLine}></View>
          <Text style={styles.item}>
            <Text style={styles.number}>01</Text> Group CEO’s Messages
          </Text>
          <Text style={styles.item}>04 About This Global Report</Text>
          <Text style={styles.item}>06 Managing Sustainability</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.sectionTitle}>Environment</Text>
          <View style={styles.horizontalLine}></View>
          <Text style={styles.item}>
            12 Environmental and Manufactured Capital
          </Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.sectionTitle}>Social</Text>
          <View style={styles.horizontalLine}></View>
          <Text style={styles.item}>25 Human Capital</Text>
          <Text style={styles.item}>31 Social and Relationship Capital</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.sectionTitle}>Governance</Text>
          <View style={styles.horizontalLine}></View>
          <Text style={styles.item}>54 Organisational Capital</Text>
          <Text style={styles.item}>68 Financial Capital</Text>
        </View>
      </View>
      <Text
        style={styles.footer}
        render={({ pageNumber, totalPages }) =>
          `Page ${pageNumber} of ${totalPages}`
        }
      />
    </Page>

    {/* Page 3 */}
    <Page style={styles.page3}>
      <Text style={styles.header}>
        GRI STANDARDS CONTENT INDEX FOR ‘ENVIRONMENTAL’
      </Text>
      <Text style={styles.subHeader}>
        SiriusImpact has reported in accordance with the GRI Standards for the
        period 1 January 2024 to 31 December 2024. The GRI Content Index
        references CapitaLand Investment Limited Sustainability Report 2024 and
        the Annual Report 2024 (AR).
      </Text>

      {/* Table */}
      <View style={styles.table}>
        <View style={styles.tableHeader}>
          <Text style={[styles.tableHeaderText, { width: "20%" }]}>
            GRI Standards
          </Text>
          <Text style={[styles.tableHeaderText, { width: "10%" }]}>
            Disclosure Number
          </Text>
          <Text style={[styles.tableHeaderText, { width: "30%" }]}>
            Disclosure Title
          </Text>
          <Text style={[styles.tableHeaderText, { width: "40%" }]}>
            Page Reference by Evidences
          </Text>
        </View>

        <View style={styles.tableRow1}>
          <Text style={[styles.tableCell1, { width: "100%" }]}>
            GRI 1: Foundation 2021 (GRI 1 does not include any disclosures)
          </Text>
        </View>

        <View style={styles.tableRow1}>
          <Text style={[styles.tableCell2, { width: "100%" }]}>
            General Disclosures
          </Text>
        </View>

        <View style={styles.tableRow}>
          <Text style={[styles.tableCell, { width: "20%" }]}>
            GRI 2: General Disclosures 2021
          </Text>
          <Text style={[styles.tableCell, { width: "10%" }]}>302-1</Text>
          <Text style={[styles.tableCell, { width: "30%" }]}>
            Energy consumption within the organization
          </Text>
          <Text style={[styles.tableCell, { width: "40%" }]}>
            Total fuel consumption within the organization from non-renewable
            sources, in joules or multiples, and including fuel types used.
          </Text>
        </View>

        {data.map((row, index) => (
          <View key={index} style={styles.tableRow}>
            <Text style={[styles.tableCell, { width: "20%" }]}>
              {row.standard}
            </Text>
            <Text style={[styles.tableCell, { width: "10%" }]}>
              {row.number}
            </Text>
            <Text style={[styles.tableCell, { width: "30%" }]}>
              {row.title}
            </Text>
            <Text style={[styles.tableCell, { width: "40%" }]}>
              {row.description}
            </Text>
          </View>
        ))}
      </View>
      <Text
        style={styles.footer}
        render={({ pageNumber, totalPages }) =>
          `Page ${pageNumber} of ${totalPages}`
        }
      />
    </Page>

    {/* Page 4 */}
    <Page style={styles.page4}>
      <Text style={styles.header}>
        GRI STANDARDS CONTENT INDEX FOR ‘SOCIAL’
      </Text>
      <Text style={styles.subHeader}>
        SiriusImpact has reported in accordance with the GRI Standards for the
        period 1 January 2024 to 31 December 2024. The GRI Content Index
        references CapitaLand Investment Limited Sustainability Report 2024 and
        the Annual Report 2024 (AR).
      </Text>

      {/* Table */}
      <View style={styles.table4}>
        <View style={styles.tableHeader4}>
          <Text style={[styles.tableHeaderText, { width: "20%" }]}>
            GRI Standards
          </Text>
          <Text style={[styles.tableHeaderText, { width: "10%" }]}>
            Disclosure Number
          </Text>
          <Text style={[styles.tableHeaderText, { width: "30%" }]}>
            Disclosure Title
          </Text>
          <Text style={[styles.tableHeaderText, { width: "40%" }]}>
            Page Reference by Evidences
          </Text>
        </View>

        <View style={styles.tableRow3}>
          <Text style={[styles.tableCell3, { width: "100%" }]}>
            GRI 1: Foundation 2021 (GRI 1 does not include any disclosures)
          </Text>
        </View>

        <View style={styles.tableRow4}>
          <Text style={[styles.tableCell4, { width: "100%" }]}>
            General Disclosures
          </Text>
        </View>

        <View style={styles.tableRow}>
          <Text style={[styles.tableCell, { width: "20%" }]}>
            GRI 2: General Disclosures 2021
          </Text>
          <Text style={[styles.tableCell, { width: "10%" }]}>302-1</Text>
          <Text style={[styles.tableCell, { width: "30%" }]}>
            Energy consumption within the organization
          </Text>
          <Text style={[styles.tableCell, { width: "40%" }]}>
            Total fuel consumption within the organization from non-renewable
            sources, in joules or multiples, and including fuel types used.
          </Text>
        </View>

        {data.map((row, index) => (
          <View key={index} style={styles.tableRow}>
            <Text style={[styles.tableCell, { width: "20%" }]}>
              {row.standard}
            </Text>
            <Text style={[styles.tableCell, { width: "10%" }]}>
              {row.number}
            </Text>
            <Text style={[styles.tableCell, { width: "30%" }]}>
              {row.title}
            </Text>
            <Text style={[styles.tableCell, { width: "40%" }]}>
              {row.description}
            </Text>
          </View>
        ))}
      </View>
      <Text
        style={styles.footer}
        render={({ pageNumber, totalPages }) =>
          `Page ${pageNumber} of ${totalPages}`
        }
      />
    </Page>

    {/* Page 5 */}
    <Page style={styles.page5}>
      <Text style={styles.header}>
        GRI STANDARDS CONTENT INDEX FOR ‘GOVERNANCE’
      </Text>
      <Text style={styles.subHeader}>
        SiriusImpact has reported in accordance with the GRI Standards for the
        period 1 January 2024 to 31 December 2024. The GRI Content Index
        references CapitaLand Investment Limited Sustainability Report 2024 and
        the Annual Report 2024 (AR).
      </Text>

      {/* Table */}
      <View style={styles.table5}>
        <View style={styles.tableHeader5}>
          <Text style={[styles.tableHeaderText, { width: "20%" }]}>
            GRI Standards
          </Text>
          <Text style={[styles.tableHeaderText, { width: "10%" }]}>
            Disclosure Number
          </Text>
          <Text style={[styles.tableHeaderText, { width: "30%" }]}>
            Disclosure Title
          </Text>
          <Text style={[styles.tableHeaderText, { width: "40%" }]}>
            Page Reference by Evidences
          </Text>
        </View>

        <View style={styles.tableRow5}>
          <Text style={[styles.tableCell5, { width: "100%" }]}>
            GRI 1: Foundation 2021 (GRI 1 does not include any disclosures)
          </Text>
        </View>

        <View style={styles.tableRow6}>
          <Text style={[styles.tableCell6, { width: "100%" }]}>
            General Disclosures
          </Text>
        </View>

        <View style={styles.tableRow}>
          <Text style={[styles.tableCell, { width: "20%" }]}>
            GRI 2: General Disclosures 2021
          </Text>
          <Text style={[styles.tableCell, { width: "10%" }]}>302-1</Text>
          <Text style={[styles.tableCell, { width: "30%" }]}>
            Energy consumption within the organization
          </Text>
          <Text style={[styles.tableCell, { width: "40%" }]}>
            Total fuel consumption within the organization from non-renewable
            sources, in joules or multiples, and including fuel types used.
          </Text>
        </View>

        {data.map((row, index) => (
          <View key={index} style={styles.tableRow}>
            <Text style={[styles.tableCell, { width: "20%" }]}>
              {row.standard}
            </Text>
            <Text style={[styles.tableCell, { width: "10%" }]}>
              {row.number}
            </Text>
            <Text style={[styles.tableCell, { width: "30%" }]}>
              {row.title}
            </Text>
            <Text style={[styles.tableCell, { width: "40%" }]}>
              {row.description}
            </Text>
          </View>
        ))}
      </View>

      <Text
        style={styles.footer}
        render={({ pageNumber, totalPages }) =>
          `Page ${pageNumber} of ${totalPages}`
        }
      />
    </Page>

    {/* Page 6 */}
    <Page style={styles.page5}>
      <Text style={styles.header}>
        GRI STANDARDS CONTENT INDEX FOR ‘ECONOMICS’
      </Text>
      <Text style={styles.subHeader}>
        SiriusImpact has reported in accordance with the GRI Standards for the
        period 1 January 2024 to 31 December 2024. The GRI Content Index
        references CapitaLand Investment Limited Sustainability Report 2024 and
        the Annual Report 2024 (AR).
      </Text>

      {/* Table */}
      <View style={styles.table5}>
        <View style={styles.tableHeader5}>
          <Text style={[styles.tableHeaderText, { width: "20%" }]}>
            GRI Standards
          </Text>
          <Text style={[styles.tableHeaderText, { width: "10%" }]}>
            Disclosure Number
          </Text>
          <Text style={[styles.tableHeaderText, { width: "30%" }]}>
            Disclosure Title
          </Text>
          <Text style={[styles.tableHeaderText, { width: "40%" }]}>
            Page Reference by Evidences
          </Text>
        </View>

        <View style={styles.tableRow5}>
          <Text style={[styles.tableCell5, { width: "100%" }]}>
            GRI 1: Foundation 2021 (GRI 1 does not include any disclosures)
          </Text>
        </View>

        <View style={styles.tableRow6}>
          <Text style={[styles.tableCell6, { width: "100%" }]}>
            General Disclosures
          </Text>
        </View>

        <View style={styles.tableRow}>
          <Text style={[styles.tableCell, { width: "20%" }]}>
            GRI 2: General Disclosures 2021
          </Text>
          <Text style={[styles.tableCell, { width: "10%" }]}>302-1</Text>
          <Text style={[styles.tableCell, { width: "30%" }]}>
            Energy consumption within the organization
          </Text>
          <Text style={[styles.tableCell, { width: "40%" }]}>
            Total fuel consumption within the organization from non-renewable
            sources, in joules or multiples, and including fuel types used.
          </Text>
        </View>

        {data.map((row, index) => (
          <View key={index} style={styles.tableRow}>
            <Text style={[styles.tableCell, { width: "20%" }]}>
              {row.standard}
            </Text>
            <Text style={[styles.tableCell, { width: "10%" }]}>
              {row.number}
            </Text>
            <Text style={[styles.tableCell, { width: "30%" }]}>
              {row.title}
            </Text>
            <Text style={[styles.tableCell, { width: "40%" }]}>
              {row.description}
            </Text>
          </View>
        ))}
      </View>
      <Text
        style={styles.footer}
        render={({ pageNumber, totalPages }) =>
          `Page ${pageNumber} of ${totalPages}`
        }
      />
    </Page>
  </Document>
);

export const generatePDF = async (data) => {
  const pdfBlob = await pdf(<PDFDocument data={data} />).toBlob();
  return pdfBlob;
};

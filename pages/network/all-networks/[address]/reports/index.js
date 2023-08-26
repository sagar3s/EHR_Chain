import React, { useState, useEffect } from 'react';
import { Button, Table } from 'semantic-ui-react';
import Link from 'next/link';
import { useRouter } from 'next/router'; // Import the useRouter hook
import Network from '../../../../../ethereum/network';
import ReportRow from '../../../../../components/ReportRow';
import Layout from '../../../../../components/Layout';

const Reports = () => {
  const router = useRouter(); // Initialize the useRouter hook
  const { Header, Row, HeaderCell, Body } = Table;
  const [loading, setLoading] = useState(true);
  const [reports, setReports] = useState([]);
  const [reportsCount, setReportsCount] = useState(0);
  const [doctorsCount, setDoctorsCount] = useState(0);

  const address = router.query.address; // Access the address from the router query

  useEffect(() => {
    if (address) {
      const fetchReports = async () => {
        const network = Network(address);

        try {
          const reportsCount = await network.methods.getReportCount().call();
          const doctorsCount = await network.methods.doctorsCount().call();

          const allReports = await Promise.all(
            Array(parseInt(reportsCount))
              .fill()
              .map((element, index) => {
                return network.methods.patientReports(index).call();
              })
          );
          const parsedReports = JSON.parse(JSON.stringify(allReports));

          setReports(parsedReports);
          setReportsCount(reportsCount);
          setDoctorsCount(doctorsCount);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching data:', error);
          setLoading(false);
        }
      };

      fetchReports();
    }
  }, [address]);

  const renderRow = () => {
    return reports.map((report, index) => {
      return (
        <ReportRow
          key={index}
          id={index}
          report={report}
          address={address}
          doctorsCount={doctorsCount}
        />
      );
    });
  };

  return (
    <>
      <Layout>
        <h2>Reports</h2>
        
        {/* Render the Add Report link only if the address is available */}
        {address && (
          <Link
            href="/network/all-networks/[address]/reports/new"
            as={`/network/all-networks/${address}/reports/new`}
          >
            <a>
              <Button floated="right" style={{ marginBottom: 10 }} color="teal">
                Add Report
              </Button>
            </a>
          </Link>
        )}

        {loading ? (
          <div>Loading...</div>
        ) : (
          <Table>
            <Header>
              <Row>
                <HeaderCell>ID</HeaderCell>
                <HeaderCell>Description</HeaderCell>
                <HeaderCell>File</HeaderCell>
                <HeaderCell>Requested Doctor</HeaderCell>
                <HeaderCell>Approval Count</HeaderCell>
                <HeaderCell>Approve</HeaderCell>
                <HeaderCell>Finalize</HeaderCell>
              </Row>
            </Header>
            <Body>{renderRow()}</Body>
          </Table>
        )}
        {!loading && <h4>{`Found ${reportsCount} reports.`}</h4>}
      </Layout>
    </>
  );
};

export default Reports;

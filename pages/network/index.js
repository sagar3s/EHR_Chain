import React, { useEffect, useState } from 'react';
import { Card, Button, Icon, Grid, Image } from 'semantic-ui-react';
import Link from 'next/link';

import factory from '../../ethereum/factory';
import Layout from '../../components/Layout';

const Network = () => {
  const [networks, setNetworks] = useState([]);

  useEffect(() => {
    async function fetchNetworks() {
      try {
        console.log('Fetching networks...');
        const deployedNetworks = await factory.methods.getDeployedNetworks().call();
        console.log('Networks fetched:', deployedNetworks);
        setNetworks(deployedNetworks);
      } catch (error) {
        console.error('Error fetching networks:', error);
      }
    }

    fetchNetworks();
  }, []); // Empty dependency array ensures the effect runs once after initial render

  const renderNetworks = () => {
    return networks.map((address) => ({
      header: address,
      description: (
        <Link href="/network/all-networks/[address]" as={`/network/all-networks/${address}`}>
          <a>View Network</a>
        </Link>
      ),
      fluid: true,
    }));
  };

  return (
    <>
      <Layout>
        <h3>Open Medical Networks</h3>
        <Grid>
          <Grid.Column width={13}>
            <Card.Group items={renderNetworks()} />
          </Grid.Column>
          <Grid.Column width={3}>
            <Link href="/network/new">
              <a>
                <Button floated="left" icon labelPosition="left" color="teal">
                  <Icon name="plus" />
                  Create Network
                </Button>
              </a>
            </Link>
          </Grid.Column>
        </Grid>
      </Layout>
    </>
  );
};

export default Network;

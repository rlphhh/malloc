import React, { useState, useEffect } from "react";
import { FadingValueBox } from "../animations";
import {
  Icon,
  Grid,
  Dropdown,
  Table,
  Menu,
  Segment,
  List
} from "semantic-ui-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";

import {
  HomeGrid,
  HeaderGridItem,
  FilterGridItem,
  ResultsGridItem,
  ChartsGridItem,
  FooterGridItem
} from "./HomeGrid";
import { AddAllocation } from "../allocations";
import { AddAssignment } from "../assignments";
import { AddTeamMember } from "../team-members";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100
  }
];

const yearOptions = [
  { key: "2018", value: "2018", text: "2018" },
  { key: "2019", value: "2019", text: "2019" }
];

const organisationOptions = [
  { key: "Department1", value: "Department1", text: "Department1" },
  { key: "Department2", value: "Department2", text: "Department2" }
];
const organdfdfdisationOptions = [
  { key: "Department1", value: "Department1", text: "Department1" },
  { key: "Department2", value: "Department2", text: "Department2" }
];

const AllocationTableRow = props => (
  <Table.Row>
    <Table.Cell>{props.memberName}</Table.Cell>
    <Table.Cell>{props.assignment}</Table.Cell>
    <Table.Cell>{props.commitment}</Table.Cell>
    <Table.Cell>{props.startDate}</Table.Cell>
    <Table.Cell>{props.endDate}</Table.Cell>
    <Table.Cell>{props.hours}</Table.Cell>
  </Table.Row>
);

const AllocationTable = props => (
  <Table selectable>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Team Member</Table.HeaderCell>
        <Table.HeaderCell>Assignment</Table.HeaderCell>
        <Table.HeaderCell>Commitment</Table.HeaderCell>
        <Table.HeaderCell>Start Date</Table.HeaderCell>
        <Table.HeaderCell>End Date</Table.HeaderCell>
        <Table.HeaderCell>Hours</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>{props.children}</Table.Body>
  </Table>
);

const Home = () => {
  const [activeItem, setActiveItem] = useState("All");
  const [initialized, setInitialized] = useState(false);

  const allocations = [
    {
      memberName: "name00",
      assignment: "assignment00",
      commitment: "committed",
      startDate: "01-01",
      endDate: "31-12",
      hours: 40
    },
    {
      memberName: "name01",
      assignment: "assignment01",
      commitment: "committed",
      startDate: "01-01",
      endDate: "31-12",
      hours: 20
    },
    {
      memberName: "name01",
      assignment: "assignment02",
      commitment: "expexted",
      startDate: "01-01",
      endDate: "31-12",
      hours: 20
    }
  ];
  useEffect(() => {
    if (!initialized) {
      console.log("Home component mounted");
      setInitialized(true);
    }
  });

  return (
    <FadingValueBox>
      <HomeGrid>
        <HeaderGridItem>
          <h1 css={{ color: "#ff00cc" }}>/&lt;malloc&gt;</h1>
        </HeaderGridItem>

        <FilterGridItem>
          <Menu>
            <Dropdown
              placeholder="Set Organisation"
              search
              selection
              options={organisationOptions}
            />
            <Dropdown
              placeholder="Set Year"
              search
              selection
              options={yearOptions}
            />
            <Menu.Menu position="right">
              <Menu.Item>
                <AddTeamMember />
              </Menu.Item>
            </Menu.Menu>
          </Menu>
          <Grid>
            <Grid.Column width={4}>
              <Menu fluid vertical tabular>
                <Menu.Item
                  name="All"
                  active={activeItem === "All"}
                  content="All"
                  onClick={e => setActiveItem("All")}
                />
                <Menu.Item
                  name="Leads"
                  active={activeItem === "Leads"}
                  content="Leads"
                  onClick={e => setActiveItem("Leads")}
                />
                <Menu.Item
                  name="Free"
                  active={activeItem === "Free"}
                  content="Free"
                  onClick={e => setActiveItem("Free")}
                />
              </Menu>
            </Grid.Column>
            <Grid.Column stretched width={12}>
              <Segment>
                <List divided relaxed>
                  <List.Item>
                    <List.Content>
                      <List.Header as="a">Team Member 000</List.Header>
                      <List.Description as="a">
                        Available for 40 hrs per week for 01-Jan till 31-Dec
                      </List.Description>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Content>
                      <List.Header as="a">Team Member 001</List.Header>
                      <List.Description as="a">
                        Available for 40 hrs per week for 01-Jan till 31-Dec
                      </List.Description>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Content>
                      <List.Header as="a">Team Member 003</List.Header>
                      <List.Description as="a">
                        Available for 40 hrs per week for 01-Jan till 31-Dec
                      </List.Description>
                    </List.Content>
                  </List.Item>
                </List>
              </Segment>
            </Grid.Column>
          </Grid>
        </FilterGridItem>

        <ResultsGridItem>
          <Menu>
            <Menu.Menu position="right">
              <Menu.Item>
                <AddAssignment />
              </Menu.Item>
              <Menu.Item>
                <AddAllocation />
              </Menu.Item>
            </Menu.Menu>
          </Menu>

          <AllocationTable>
            {allocations.map((allocation, index) => (
              <AllocationTableRow key={index} {...allocation} />
            ))}
          </AllocationTable>
        </ResultsGridItem>

        <ChartsGridItem>
          <AreaChart
            width={500}
            height={400}
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="uv"
              stackId="1"
              stroke="#8884d8"
              fill="#8884d8"
            />
            <Area
              type="monotone"
              dataKey="pv"
              stackId="1"
              stroke="#82ca9d"
              fill="#82ca9d"
            />
            <Area
              type="monotone"
              dataKey="amt"
              stackId="1"
              stroke="#ffc658"
              fill="#ffc658"
            />
          </AreaChart>
        </ChartsGridItem>

        <FooterGridItem css={{ color: "#ff00cc" }}>
          © 2019 by Malloc
        </FooterGridItem>
      </HomeGrid>
    </FadingValueBox>
  );
};

export { Home };

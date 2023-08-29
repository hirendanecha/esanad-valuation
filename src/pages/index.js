import Head from "next/head";
// import { subDays, subHours } from "date-fns";
import {
  Box,
  Container,
  Unstable_Grid2 as Grid,
  Card,
  CardContent,
  Typography,
  CardHeader,
  useMediaQuery,
  Divider,
  ListItem,
  List,
  Stack,
  Chip,
} from "@mui/material";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
// import { PropertyList } from "src/components/property-list";
// import { PropertyListItem } from "src/components/property-list-item";
// import { OverviewBudget } from "src/sections/overview/overview-budget";
// import { OverviewLatestOrders } from "src/sections/overview/overview-latest-orders";
// import { OverviewLatestProducts } from "src/sections/overview/overview-latest-products";
// import { OverviewSales } from "src/sections/overview/overview-sales";
// import { OverviewTasksProgress } from "src/sections/overview/overview-tasks-progress";
// import { OverviewTotalCustomers } from "src/sections/overview/overview-total-customers";
// import { OverviewTotalProfit } from "src/sections/overview/overview-total-profit";
// import { OverviewTraffic } from "src/sections/overview/overview-traffic";
// import dynamic from "next/dynamic";
import { Chart } from "src/components/chart";
import { PropertyList } from "src/components/property-list";
import { PropertyListItem } from "src/components/property-list-item";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useRef } from "react";
import {
  getCarModals,
  getLatestCarValued,
  getTopBrands,
  getTotalValuation,
} from "src/redux/actions/action";

// const Chart = dynamic(() => import("react-apexcharts"), {
//   ssr: false,
//   loading: () => null,
// });

const now = new Date();

const Page = () => {
  const { topBrands, carModalsData, totalValuationData, latestCarValuationData } = useSelector(
    (state) => state.basic
  );
  const dispatch = useDispatch();

  // console.log("topBrands", topBrands);
  // console.log("carModalsData", carModalsData);
  // console.log("totalValuationData", totalValuationData);
  // console.log("latestCarValuationData", latestCarValuationData);

  const mdUp = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const align = mdUp ? "horizontal" : "vertical";

  const initialized = useRef(false);
  const getTopBrandHandler = async () => {
    // Prevent from calling twice in development mode with React.StrictMode enabled
    if (initialized.current) {
      return;
    }
    initialized.current = true;
    try {
      dispatch(getTopBrands())
        .unwrap()
        .then((res) => {
          // console.log("res", res);
        })
        .catch((err) => {
          if (err) {
            console.log("err", err);
          }
        });
    } catch (err) {
      console.log(err);
    }
  };

  const carModalDataRef = useRef(false);
  const getCarModalHandler = async () => {
    // Prevent from calling twice in development mode with React.StrictMode enabled
    if (carModalDataRef.current) {
      return;
    }
    carModalDataRef.current = true;
    try {
      dispatch(getCarModals())
        .unwrap()
        .then((res) => {
          // console.log("res", res);
        })
        .catch((err) => {
          if (err) {
            console.log("err", err);
          }
        });
    } catch (err) {
      console.log(err);
    }
  };

  const totalValuationDataRef = useRef(false);
  const getTotalValuationHandler = async () => {
    // Prevent from calling twice in development mode with React.StrictMode enabled
    if (totalValuationDataRef.current) {
      return;
    }
    totalValuationDataRef.current = true;
    try {
      dispatch(getTotalValuation())
        .unwrap()
        .then((res) => {
          // console.log("res", res);
        })
        .catch((err) => {
          if (err) {
            console.log("err", err);
          }
        });
    } catch (err) {
      console.log(err);
    }
  };

  const latestCarValuatedDataRef = useRef(false);
  const getLatestCarValuatedHandler = async () => {
    // Prevent from calling twice in development mode with React.StrictMode enabled
    if (latestCarValuatedDataRef.current) {
      return;
    }
    latestCarValuatedDataRef.current = true;
    try {
      dispatch(getLatestCarValued())
        .unwrap()
        .then((res) => {
          // console.log("res", res);
        })
        .catch((err) => {
          if (err) {
            console.log("err", err);
          }
        });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(
    () => {
      getTopBrandHandler();
      getCarModalHandler();
      getTotalValuationHandler();
      getLatestCarValuatedHandler();
    },

    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const NationalitiesData = [
    {
      name: "Brazil",
    },
    {
      name: "Albania",
    },
    {
      name: "Colombia",
    },
    {
      name: "Afghanistan",
    },
    {
      name: "Algeria",
    },
  ];

  const data = {
    series: [
      {
        color: "rgba(86, 100, 210, 0.5)",
        data: 10,
        label: "Linkedin",
      },
      {
        color: "#FFB547",
        data: 10,
        label: "Facebook",
      },
      {
        color: "#7BC67E",
        data: 20,
        label: "Instagram",
      },
      {
        color: "#64B6F7",
        data: 10,
        label: "Twitter",
      },
      {
        color: "#455a64",
        data: 70,
        label: "Other",
      },
    ],
  };

  const chartOptions = {
    chart: {
      background: "transparent",
      stacked: false,
      toolbar: {
        show: false,
      },
    },
    colors: ["#FFB547", "#7BC67E", "#64B6F7", "#455a64", "#fff"],
    dataLabels: {
      enabled: false,
    },
    fill: {
      opacity: 1,
    },
    labels: ["Linkedin", "Facebook", "Instagram", "Twitter", "Other"],
    legend: {
      show: false,
    },
    stroke: {
      width: 0,
    },
  };

  // const chartSeries = data.series.map((item) => item.data);

  return (
    <>
      <Head>
        <title>Overview | Devias Kit</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={3}>
            <Grid xs={12} sm={6} lg={3}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                }}
              >
                <CardHeader title="Most Valuated Car Brand" />
                <Divider />
                <List
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                  }}
                >
                  {topBrands &&
                    topBrands?.map((item, index) => (
                      <>
                        <ListItem
                          sx={{
                            px: 1,
                            py: 1.5,
                            width: "auto",
                          }}
                          key={index}
                        >
                          <Box
                            sx={{
                              alignItems: "center",
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            {/* <Typography color="textSecondary" variant="body2" sx={{ mt: 1 }}>
                              {item?.name}
                            </Typography> */}

                            <Chip label={item?.name} color="primary" />
                          </Box>
                        </ListItem>
                        <>{topBrands?.length - 1 !== index && <Divider />}</>
                      </>
                    ))}
                </List>
              </Card>
            </Grid>

            <Grid xs={12} sm={6} lg={3}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                }}
              >
                <CardHeader title="Most Valuated Car Model" />
                <Divider />
                <List
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                  }}
                >
                  {carModalsData &&
                    carModalsData?.map((item, index) => (
                      <>
                        <ListItem
                          sx={{
                            px: 1,
                            py: 1.5,
                            width: "auto",
                          }}
                          key={index}
                        >
                          <Box
                            sx={{
                              alignItems: "center",
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <Chip label={item?.Car_Model} color="primary" />
                          </Box>
                        </ListItem>
                        <>{carModalsData?.length - 1 !== index && <Divider />}</>
                      </>
                    ))}
                </List>
              </Card>
            </Grid>

            <Grid xs={12} sm={6} lg={3}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                }}
              >
                <CardHeader title="Top 5 Nationalities" />
                <Divider />
                <List
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                  }}
                >
                  {NationalitiesData &&
                    NationalitiesData?.map((item, index) => (
                      <>
                        <ListItem
                          sx={{
                            px: 1,
                            py: 1.5,
                            width: "auto",
                            // justifyContent: "center",
                          }}
                          key={index}
                        >
                          <Box
                            sx={{
                              alignItems: "center",
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <Chip label={item?.name} color="primary" />
                          </Box>
                        </ListItem>
                        <>{NationalitiesData?.length - 1 !== index && <Divider />}</>
                      </>
                    ))}
                </List>
              </Card>
            </Grid>

            <Grid xs={12} sm={6} lg={3}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  // height: "100%",
                }}
              >
                <CardHeader title="Total Valuations" />
                <Divider />
                <CardContent>
                  <Stack spacing={1}>
                    <Typography variant="h4">
                      {totalValuationData ? totalValuationData[0]?.Total_Count : "-"}
                    </Typography>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>

            <Grid xs={6}>
              <Card>
                <CardHeader title="Latest Valuated Car" />
                <Divider />

                <PropertyList>
                  <PropertyListItem
                    align={align}
                    divider
                    label="Car Brand"
                    value={latestCarValuationData ? latestCarValuationData[0]?.Car_Brand : "-"}
                  />
                  <PropertyListItem
                    align={align}
                    divider
                    label="Car Year"
                    value={latestCarValuationData ? latestCarValuationData[0]?.Car_Year : "-"}
                  />
                  <PropertyListItem
                    align={align}
                    divider
                    label="Car Model"
                    value={latestCarValuationData ? latestCarValuationData[0]?.Car_Model : "-"}
                  />
                  <PropertyListItem
                    align={align}
                    divider
                    label="Car Trim"
                    value={latestCarValuationData ? latestCarValuationData[0]?.Car_Trim : "-"}
                  />
                  <PropertyListItem
                    align={align}
                    divider
                    label="Predicted Price"
                    value={latestCarValuationData ? latestCarValuationData[0]?.Car_Price : "-"}
                  />
                  <PropertyListItem
                    align={align}
                    divider
                    label="Valuation Time"
                    value={latestCarValuationData ? latestCarValuationData[0]?.createdAt : "-"}
                  />
                </PropertyList>
              </Card>
            </Grid>

            <Grid xs={12} sm={6}>
              <Card>
                <CardHeader title="Valuations by Brand/Model" />
                <Divider />

                <Chart
                  height={"100%"}
                  width={"100%"}
                  options={chartOptions}
                  series={[10, 10, 20, 10]}
                  type="donut"
                />
              </Card>
            </Grid>

            <Grid xs={12} sm={12}>
              <Card>
                <CardHeader title="Valuations by Brand/Model" />
                <Divider />

                <Chart
                  height={467}
                  width={"100%"}
                  options={{
                    chart: {
                      background: "transparent",
                      stacked: false,
                      toolbar: {
                        show: false,
                      },
                    },
                    colors: ["#ffb547", "#7783DB"],
                    dataLabels: {
                      enabled: false,
                    },
                    fill: {
                      type: "solid",
                      opacity: 0,
                    },
                    grid: {
                      // borderColor: theme.palette.divider
                    },
                    markers: {
                      // strokeColors: theme.palette.background.paper,
                      size: 6,
                    },
                    stroke: {
                      curve: "straight",
                      width: 2,
                    },
                    theme: {
                      // mode: theme.palette.mode
                    },
                    xaxis: {
                      axisBorder: {
                        // color: theme.palette.divider,
                        show: true,
                      },
                      axisTicks: {
                        // color: theme.palette.divider,
                        show: true,
                      },
                      categories: [
                        "Jan",
                        "Feb",
                        "Mar",
                        "Apr",
                        "May",
                        "Jun",
                        "Jul",
                        "Aug",
                        "Sep",
                        "Oct",
                        "Nov",
                        "Dec",
                      ],
                    },
                  }}
                  series={[
                    {
                      name: "New Customers",
                      data: [138, 118, 45, 117, 140, 42, 100, 15, 97, 117, 60, 140],
                    },
                  ]}
                  type="area"
                />
              </Card>
            </Grid>

            {/* <Grid xs={12} sm={6} lg={3}>
              <OverviewBudget difference={12} positive sx={{ height: "100%" }} value="$24k" />
            </Grid> */}

            {/* <Grid xs={12} sm={6} lg={3}>
                <OverviewTotalCustomers
                  difference={16}
                  positive={false}
                  sx={{ height: "100%" }}
                  value="1.6k"
                />
              </Grid> */}

            {/* <Grid xs={12} sm={6} lg={3}>
                <OverviewTasksProgress sx={{ height: "100%" }} value={75.5} />
              </Grid> */}

            {/* <Grid xs={12} sm={6} lg={3}>
                <OverviewTotalProfit sx={{ height: "100%" }} value="$15k" />
              </Grid> */}

            {/* <Grid xs={12} lg={8}>
                <OverviewSales
                  chartSeries={[
                    {
                      name: "This year",
                      data: [18, 16, 5, 8, 3, 14, 14, 16, 17, 19, 18, 20],
                    },
                    {
                      name: "Last year",
                      data: [12, 11, 4, 6, 2, 9, 9, 10, 11, 12, 13, 13],
                    },
                  ]}
                  sx={{ height: "100%" }}
                />
              </Grid> */}

            {/* <Grid xs={12} md={6} lg={4}>
                <OverviewTraffic
                  chartSeries={[63, 15, 22]}
                  labels={["Desktop", "Tablet", "Phone"]}
                  sx={{ height: "100%" }}
                />
              </Grid> */}

            {/* <Grid xs={12} md={6} lg={4}>
                <OverviewLatestProducts
                  products={[
                    {
                      id: "5ece2c077e39da27658aa8a9",
                      image: "/assets/products/product-1.png",
                      name: "Healthcare Erbology",
                      updatedAt: subHours(now, 6).getTime(),
                    },
                    {
                      id: "5ece2c0d16f70bff2cf86cd8",
                      image: "/assets/products/product-2.png",
                      name: "Makeup Lancome Rouge",
                      updatedAt: subDays(subHours(now, 8), 2).getTime(),
                    },
                    {
                      id: "b393ce1b09c1254c3a92c827",
                      image: "/assets/products/product-5.png",
                      name: "Skincare Soja CO",
                      updatedAt: subDays(subHours(now, 1), 1).getTime(),
                    },
                    {
                      id: "a6ede15670da63f49f752c89",
                      image: "/assets/products/product-6.png",
                      name: "Makeup Lipstick",
                      updatedAt: subDays(subHours(now, 3), 3).getTime(),
                    },
                    {
                      id: "bcad5524fe3a2f8f8620ceda",
                      image: "/assets/products/product-7.png",
                      name: "Healthcare Ritual",
                      updatedAt: subDays(subHours(now, 5), 6).getTime(),
                    },
                  ]}
                  sx={{ height: "100%" }}
                />
              </Grid> */}

            {/* <Grid
                xs={12}
                md={12}
                lg={8}
              >
                <OverviewLatestOrders
                  orders={[
                    {
                      id: 'f69f88012978187a6c12897f',
                      ref: 'DEV1049',
                      amount: 30.5,
                      customer: {
                        name: 'Ekaterina Tankova'
                      },
                      createdAt: 1555016400000,
                      status: 'pending'
                    },
                    {
                      id: '9eaa1c7dd4433f413c308ce2',
                      ref: 'DEV1048',
                      amount: 25.1,
                      customer: {
                        name: 'Cao Yu'
                      },
                      createdAt: 1555016400000,
                      status: 'delivered'
                    },
                    {
                      id: '01a5230c811bd04996ce7c13',
                      ref: 'DEV1047',
                      amount: 10.99,
                      customer: {
                        name: 'Alexa Richardson'
                      },
                      createdAt: 1554930000000,
                      status: 'refunded'
                    },
                    {
                      id: '1f4e1bd0a87cea23cdb83d18',
                      ref: 'DEV1046',
                      amount: 96.43,
                      customer: {
                        name: 'Anje Keizer'
                      },
                      createdAt: 1554757200000,
                      status: 'pending'
                    },
                    {
                      id: '9f974f239d29ede969367103',
                      ref: 'DEV1045',
                      amount: 32.54,
                      customer: {
                        name: 'Clarke Gillebert'
                      },
                      createdAt: 1554670800000,
                      status: 'delivered'
                    },
                    {
                      id: 'ffc83c1560ec2f66a1c05596',
                      ref: 'DEV1044',
                      amount: 16.76,
                      customer: {
                        name: 'Adam Denisov'
                      },
                      createdAt: 1554670800000,
                      status: 'delivered'
                    }
                  ]}
                  sx={{ height: '100%' }}
                />
              </Grid> */}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;

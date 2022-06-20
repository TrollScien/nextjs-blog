import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import Image from "next/image";
import {
  Box,
  Heading,
  Text,
  Stack,
  HStack,
  Avatar,
  Divider,
} from "@chakra-ui/react";

function Feature({ id, title, date }) {
  return (
    <Box p={5} shadow="md" borderWidth="2px" maxWidth={450}>
      <Heading size="md" fontSize="50px">
        <Link href={`/posts/${id}`}>{title}</Link>
      </Heading>
      <Divider py={5} />
      <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
        <Avatar
          src={"https://avatars0.githubusercontent.com/u/1164541?v=4"}
          alt={"Author"}
        />
        <Stack direction={"column"} spacing={0} fontSize={"sm"}>
          <Text fontWeight={600}>Achim Rolle</Text>
          <Text color={"gray.500"}>
            <Date dateString={date} />
          </Text>
        </Stack>
      </Stack>
    </Box>
  );
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hola soy Pepito</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <HStack spacing={8}>
                <Feature id={id} title={title} date={date} />
              </HStack>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

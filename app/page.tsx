"use client";
import "@mantine/core/styles.css";
import styles from "./page.module.css";
import { createTheme, MantineProvider } from "@mantine/core";
import {
  Card,
  Image,
  Text,
  Badge,
  Button,
  Group,
  CardSection,
} from "@mantine/core";
import { useEffect, useState } from "react";

const theme = createTheme({
  /** Put your mantine theme override here */
});

const query = `
{
  vacationCollection{
    items{
      title
      description
      image{
        url
      }
    }
  }
}
`;

export default function Home() {
  const [page, setPage] = useState<[] | null>(null);

  useEffect(() => {
    window
      .fetch(`https://graphql.contentful.com/content/v1/spaces/m5sw48fugbsv/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Authenticate the request
          Authorization: "Bearer uf65urh9KimDadOzKwWJXBtJhwr5MZaj0r_Z1vnr6O4",
        },
        // send the GraphQL query
        body: JSON.stringify({ query }),
      })
      .then((response) => response.json())
      .then(({ data, errors }) => {
        if (errors) {
          console.error(errors);
        }

        // rerender the entire component with new data
        setPage(data.vacationCollection.items);
      });
  }, []);

  if (!page) {
    return "Loading...";
  }
  return (
    <MantineProvider>
      <main className={styles.main}>
        <h1>My Plan for 2025</h1>
        {page.map(
          (
            item: {
              title: string;
              description: string;
              image: { url: string };
            },
            index: number
          ) => {
            return (
              <Card
                shadow="sm"
                padding="lg"
                radius="md"
                withBorder
                key={index}
                m={10}
              >
                <CardSection>
                  <Image
                    src={item.image.url}
                    height={400}
                    alt={item.title}
                    fit="cover"
                  />
                </CardSection>

                <Group justify="space-between" mt="md" mb="xs">
                  <h2>{item.title}</h2>
                </Group>

                <Text size="sm" c="dimmed">
                  {item.description}
                </Text>

                <Button color="blue" fullWidth mt="md" radius="md">
                  Book classic tour now
                </Button>
              </Card>
            );
          }
        )}
      </main>
    </MantineProvider>
  );
}

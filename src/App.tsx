import { 
  Box, 
  Container, 
  Heading, 
  Text, 
  Stack,
  Highlight, 
  Image,
  Table,
  Link,
  Timeline,
  Badge
} from '@chakra-ui/react';
import { LuShieldCheck, LuGraduationCap, LuCrown } from 'react-icons/lu';

function App() {

  return (
    <Box 
      bgGradient="linear(to-br, gray.900, purple.900)" 
      color="black"
      py={{ base: 20, md: 28 }}
    >
<Container maxW="container.md" px={{ base: 6, md: 400 }}>
        <Stack align="center" mb={4} textAlign="center">
            <Image
              src="/me.jpg"
              boxSize="150px"
              borderRadius="full"
              fit="cover"
              alt="icon of shtermem"
              border="2px solid"
              borderColor="fg.muted"
            />
          <Heading size="3xl" letterSpacing="tight">
            <Highlight query="しゅたーめむ" styles={{ color: "teal.600" }}>
              しゅたーめむ (@shtermem)
            </Highlight>
          </Heading>
          <Text fontSize="md" color="fg.muted">
            15y/o Student @Kyushu, Japan
          </Text>
          
          <Stack 
            direction="row" 
            gap={6} 
            justify="center"
          >
            <Link href="https://twitter.com/shtermem" target="_blank" rel="noopener noreferrer" color="teal.600" _hover={{ color: "teal.500" }}>
              Twitter
            </Link>
            <Link href="https://github.com/shtermem" target="_blank" rel="noopener noreferrer" color="teal.600" _hover={{ color: "teal.500" }}>
              GitHub
            </Link>
            <Link href="https://misskey.io/@shtermem" target="_blank" rel="noopener noreferrer" color="teal.600" _hover={{ color: "teal.500" }}>
              ActivityPub
            </Link>
          </Stack>
        </Stack>

        <Heading size="2xl" mb={2}>わたしについて</Heading>
          <Text mb={4}>
            高校生です。都市工学に興味があります。地理と Golang が好きです。理芽と Chevon をよく聴いています。
          </Text>

        <Heading size="lg">🫠 興味・関心</Heading>
        <Table.Root size="sm" mb={"2"}>
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeader>きになること</Table.ColumnHeader>
              <Table.ColumnHeader>くわしく</Table.ColumnHeader>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {whatIwanttoDo.map((item) => (
              <Table.Row key={item.id}>
                <Table.Cell>{item.name}</Table.Cell>
                <Table.Cell>{item.category}</Table.Cell>
              </Table.Row>
            ))}
            </Table.Body>
          </Table.Root>

        <Heading size="lg">🛠️ スキル</Heading>
        <Table.Root size="sm" mb={"4"}>
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeader>できること</Table.ColumnHeader>
              <Table.ColumnHeader>どれくらい</Table.ColumnHeader>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {whatIcanDo.map((item) => (
              <Table.Row key={item.id}>
                <Table.Cell>{item.name}</Table.Cell>
                <Table.Cell>{item.category}</Table.Cell>
              </Table.Row>
            ))}
            </Table.Body>
          </Table.Root>

          <Heading size="lg" mb={"2"}>💪 やったこと</Heading>
          <Text textStyle={"sm"} mb={4}>
            なにをしたかまとめていないと自己肯定感すぐ下がるので
          </Text>

          <Timeline.Root size={"xl"} mb={"4"}>
            <Timeline.Item>
              <Timeline.Connector>
                <Timeline.Separator />
                  <Timeline.Indicator>
                    <LuGraduationCap/>
                  </Timeline.Indicator>
              </Timeline.Connector>
              <Timeline.Content>
                <Timeline.Title>中学校入学</Timeline.Title>
                <Timeline.Description>April 2023 - March 2026</Timeline.Description>
              </Timeline.Content>
            </Timeline.Item>
            <Timeline.Item>
              <Timeline.Connector>
                <Timeline.Separator />
                  <Timeline.Indicator>
                    <LuShieldCheck/>
                  </Timeline.Indicator>
              </Timeline.Connector>
              <Timeline.Content>
                <Timeline.Title>実用英語技能検定 3級 <Badge colorPalette="teal">CEFR-A1</Badge></Timeline.Title>
                <Timeline.Description>July 2025</Timeline.Description>
              </Timeline.Content>
            </Timeline.Item>
            <Timeline.Item>
              <Timeline.Connector>
                <Timeline.Separator />
                  <Timeline.Indicator>
                    <LuCrown/>
                  </Timeline.Indicator>
              </Timeline.Connector>
              <Timeline.Content>
                <Timeline.Title>JOI'25 日本情報オリンピック<Badge colorPalette="blue">2次予選 Bランク</Badge></Timeline.Title>
                <Timeline.Description>Decenber 2025</Timeline.Description>
              </Timeline.Content>
            </Timeline.Item>
            <Timeline.Item>
              <Timeline.Connector>
                <Timeline.Separator />
                  <Timeline.Indicator>
                    <LuCrown/>
                  </Timeline.Indicator>
              </Timeline.Connector>
              <Timeline.Content>
                <Timeline.Title>JGeO'26 科学地理オリンピック日本選手権<Badge colorPalette="blue">1次予選敗退</Badge></Timeline.Title>
                <Timeline.Description>Decenber 2025</Timeline.Description>
              </Timeline.Content>
            </Timeline.Item>
            <Timeline.Item>
              <Timeline.Connector>
              </Timeline.Connector>
            </Timeline.Item>
            <Timeline.Item>
              <Timeline.Connector>
                <Timeline.Separator />
                  <Timeline.Indicator>
                    <LuGraduationCap/>
                  </Timeline.Indicator>
              </Timeline.Connector>
              <Timeline.Content>
                <Timeline.Title>高等学校入学</Timeline.Title>
                <Timeline.Description>April 2026 - Now</Timeline.Description>
              </Timeline.Content>
            </Timeline.Item>
            <Timeline.Item>
              <Timeline.Connector>
                <Timeline.Separator />
                  <Timeline.Indicator>
                    <LuShieldCheck/>
                  </Timeline.Indicator>
              </Timeline.Connector>
              <Timeline.Content>
                <Timeline.Title>実用英語技能検定 2級 <Badge colorPalette="teal">CEFR-B1</Badge></Timeline.Title>
                <Timeline.Description>July 2026</Timeline.Description>
              </Timeline.Content>
            </Timeline.Item>
            <Timeline.Item>
              <Timeline.Connector>
              </Timeline.Connector>
            </Timeline.Item>
          </Timeline.Root>

      </Container>
    </Box>
  )
}

const whatIwanttoDo = [
  { id: 1, name: "地理学・都市工学", category: "昔から地図を見るのが好きです。JGeO'26 出てました"},
  { id: 2, name: "分散型プロトコル", category: "一時期 ActivityPub とか流行ったころに知りました。セルフホストしてみたい"},
  { id: 3, name: "競技プログラミング", category: "JOI'25 がきっかけです。暇ができたらやりたいです"},
]

const whatIcanDo = [
  { id: 1, name: "🇯🇵 日本語", category: "ネイティブです 一応"},
  { id: 2, name: "🇬🇧 English", category: "CEFR-B1 です"},
  { id: 3, name: "プログラミング", category: "Golang が好きです。TypeScript と Dart も書くことがあります"},
  { id: 4, name: "グラフィックデザイン", category: "Inkscape と Affinity が使えます。Adobe のライセンスがほしいです"},
]

export default App

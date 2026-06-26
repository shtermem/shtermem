import { 
  Box, 
  Container, 
  Heading, 
  Text, 
  Stack,
  Highlight, 
  Image,
  Link,
  Timeline,
  Badge,
  List} from '@chakra-ui/react';
import { LuShieldCheck, LuGraduationCap, LuCrown, LuLanguages, LuSquareCode, LuBird, LuCat, LuHandshake, LuCircleCheck, LuBuilding2, LuCloud } from 'react-icons/lu';
function App() {

  return (
    <Box 
      bg="linear(to-br, gray.900, purple.900)" 
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
            <Highlight query="しゅたーめむ" styles={{ color: "pink.600" }}>
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

            <Link href="https://twitter.com/shtermem" target="_blank" rel="noopener noreferrer" color="pink.600" _hover={{ color: "pink.600.500" }}>
              Twitter
            </Link>
            <Link href="https://github.com/shtermem" target="_blank" rel="noopener noreferrer" color="pink.600" _hover={{ color: "pink.600.500" }}>
              Github
            </Link>
            <Link href="https://misskey.io/@shtermem" target="_blank" rel="noopener noreferrer" color="pink.600" _hover={{ color: "pink.500" }}>
              ActivityPub
            </Link>
          </Stack>
        </Stack>

        <Heading size="xl" mb={2}>こんにちは 👋</Heading>
          <Text mb={4} textStyle={"md"}>
            高校生です。多趣味です。物事への情熱は熱しやすく冷めやすいです。<br/>
            どさんこですが寒がりです。<br/>
            最近ギターを始めました。Fコードが押さえられません。
          </Text>

          <Heading size="lg" mb={"2"}>Skills</Heading>
          <List.Root gap="2" variant="plain" align="center" mb={"4"}>
            <List.Item>
              <List.Indicator asChild color="pink.600">
                <LuLanguages />
              </List.Indicator>
              Japanese <Badge colorPalette="pink" ml='1' mr='1'>Native</Badge> , English <Badge colorPalette="blue" ml='1' mr='1'>CEFR-B1</Badge> , Chinese <Badge colorPalette="gray" ml='1' mr='1'>Beginner</Badge>
            </List.Item>
            <List.Item>
              <List.Indicator asChild color="pink.600">
                <LuSquareCode />
              </List.Indicator>
              Golang, Dart/Flutter, TypeScript
            </List.Item>
          </List.Root>

        <Heading size="lg" mb={"2"}>Interests</Heading>
        <List.Root gap="2" variant="plain" align="center" mb={"4"}>
          <List.Item>
            <List.Indicator asChild color="pink.600">
              <LuBuilding2 />
            </List.Indicator>
            都市工学, 土木工学
          </List.Item>
          <List.Item>
            <List.Indicator asChild color="pink.600">
              <LuCloud />
            </List.Indicator>
            インターネット技術 - ブロックチェーンなど
          </List.Item>
          <List.Item>
            <List.Indicator asChild color="pink.600">
              <LuShieldCheck />
            </List.Indicator>
            資格取得 - 英検準1級, 基本情報技術者 など
          </List.Item>
        </List.Root>

        <Heading size="lg" mb={"2"}>Favorites Activity</Heading>
        <List.Root gap="2" variant="plain" align="center" mb={"4"}>
          <List.Item>
            <List.Indicator asChild color="pink.600">
              <LuCircleCheck />
            </List.Indicator>
            紅茶
          </List.Item>
          <List.Item>
            <List.Indicator asChild color="pink.600">
              <LuCircleCheck />
            </List.Indicator>
            自転車
          </List.Item>
          <List.Item>
            <List.Indicator asChild color="pink.600">
              <LuCircleCheck />
            </List.Indicator>
            ギター - 最近はじめました
          </List.Item>
        </List.Root>

        <Heading size="lg" mb={"2"}>Favorites Artists</Heading>
        <List.Root gap="2" variant="plain" align="center" mb={"4"}>
          <List.Item>
            <List.Indicator asChild color="pink.600">
              <LuCircleCheck />
            </List.Indicator>
            Chevon
          </List.Item>
          <List.Item>
            <List.Indicator asChild color="pink.600">
              <LuCircleCheck />
            </List.Indicator>
            理芽
          </List.Item>
          <List.Item>
            <List.Indicator asChild color="pink.600">
              <LuCircleCheck />
            </List.Indicator>
            笹川真生
          </List.Item>
        </List.Root>

        <Heading size="lg" mb={"2"}>Pasts</Heading>
          <Text textStyle={"sm"} mb={4}>
          </Text>

          <Timeline.Root size={"xl"} mb={"4"}>
            <Timeline.Item>
              <Timeline.Connector >
                <Timeline.Separator />
                  <Timeline.Indicator >
                    <LuGraduationCap/>
                  </Timeline.Indicator>
              </Timeline.Connector>
              <Timeline.Content>
                <Timeline.Title>中学校入学</Timeline.Title>
                <Timeline.Description>Apr 2023 - Mar 2026</Timeline.Description>
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
                <Timeline.Title>実用英語技能検定 3級</Timeline.Title>
                <Timeline.Description>Jul 2025 <Badge colorPalette="gray" ml='1' mr='1'>CEFR-A1</Badge></Timeline.Description>
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
                <Timeline.Title>JOI'25 日本情報オリンピック</Timeline.Title>
                <Timeline.Description>Dec 2025 <Badge colorPalette="blue" ml='1' mr='1'>2次予選 Bランク</Badge></Timeline.Description>
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
                <Timeline.Title>JGeO'26 科学地理オリンピック日本選手権</Timeline.Title>
                <Timeline.Description>Feb 2025 <Badge colorPalette="gray" ml='1' mr='1'>1次予選敗退</Badge></Timeline.Description>
              </Timeline.Content>
            </Timeline.Item>
            <Timeline.Item>
              <Timeline.Connector>
                <Timeline.Separator />
                  <Timeline.Indicator>
                    <LuGraduationCap/>
                  </Timeline.Indicator>
              </Timeline.Connector>
              <Timeline.Content>
                <Timeline.Title>
                  高等学校入学
                </Timeline.Title>
                <Timeline.Description>Apr 2026 - <strong>Now</strong> - Mar 2029 (Expected)</Timeline.Description>
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
                <Timeline.Title>実用英語技能検定 2級</Timeline.Title>
                <Timeline.Description>Jul 2026 <Badge colorPalette="blue" ml='1' mr='1'>CEFR-B1</Badge></Timeline.Description>
              </Timeline.Content>
            </Timeline.Item>
          </Timeline.Root>

        <Heading size="2xl" mb={2}>Links</Heading>
        <Text mb={4} textStyle={"md"}>
            ご連絡は Twitter か Misskey までおねがいします
        </Text>
        <List.Root gap="2" variant="plain" align="center" mb={8}>
          <List.Item>
            <List.Indicator asChild color="pink.600">
              <LuBird />
            </List.Indicator>
            Twitter <Link href="https://twitter.com/shtermem" target="_blank" rel="noopener noreferrer" color="pink.600" _hover={{ color: "pink.600.500" }} ml='1' mr='1'>
              @shtermem
            </Link>
          </List.Item>
          <List.Item>
            <List.Indicator asChild color="pink.600">
              <LuCat />
            </List.Indicator>
            Github <Link href="https://github.com/shtermem" target="_blank" rel="noopener noreferrer" color="pink.600" _hover={{ color: "pink.600.500" }} ml='1' mr='1'>
              /shtermem
            </Link>
          </List.Item>
          <List.Item>
            <List.Indicator asChild color="pink.600">
              <LuHandshake />
            </List.Indicator>
            Misskey <Link href="https://misskey.io/@shtermem" target="_blank" rel="noopener noreferrer" color="pink.600" _hover={{ color: "pink.600.500" }} ml='1' mr='1'>
              @shtermem@misskey.io
            </Link>
          </List.Item>
        </List.Root>

        <Stack align="center" mb={4} textAlign="center">
          
          <Text fontSize="xs" color="fg.muted">
            © 2026 shtermem, Built with React + Github Pages
          </Text>
          
          
        </Stack>

      </Container>
    </Box>
  )
}

export default App

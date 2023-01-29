import WelcomePage from '@/components/layout/Page/WelcomePage'
import classnames from 'classnames'
import { Card } from '@/components/layout'
import { Button } from '@/components/forms'
import * as Tabs from '@radix-ui/react-tabs'
import {
  BiLinkExternal,
  BiPlanet,
  BiBadgeCheck,
  BiPalette,
  BiRun,
  BiCheckbox,
} from 'react-icons/bi'
import Image from "next/legacy/image";

const Welcome = () => {
  return (
    <WelcomePage
      children={
        <>
          <WelcomeCard />
          <RoadmapCard />

          {/* UTILITY */}
          <Card id="utility" className="col-span-4" title="Utility" />

          {/* FIRST SETTLERS */}
          <Card
            id="First Settlers"
            className="col-span-2"
            title="First Settlers"
          />

          {/* DOCUMENTATION */}
          <Card id="details" className="col-span-2" title="Documentation" />

          {/* COLLABORATIONS */}
          <Card
            id="collaborations"
            className="col-span-2"
            title="Collaborations"></Card>

          {/* TREASURY */}
          <Card id="treasury" className="col-span-2" title="Treasury" />
        </>
      }
    />
  )
}

const WelcomeCard = () => {
  const Logo = () => {
    return (
      <svg
        className="origin-top-left scale-50 motion-safe:transition-transform "
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#a)" fill="currentColor">
          <path d="M17.249 33.325H8.277C3.5 33.325 0 30.05 0 25.57V7.763C0 3.276 3.5 0 8.277 0h9.085a8.117 8.117 0 0 1 3.158.58c1.003.402 1.912 1 2.674 1.757a7.897 7.897 0 0 1 1.76 2.65c.4.992.591 2.053.564 3.12v2.008h-5.966V7.588a2.128 2.128 0 0 0-.593-1.46 2.187 2.187 0 0 0-1.444-.668H7.962c-.552.032-1.07.27-1.45.665-.38.396-.592.919-.595 1.463v18.213c.003.545.216 1.068.596 1.463s.897.633 1.449.665h9.553a2.187 2.187 0 0 0 1.444-.668c.378-.395.59-.917.593-1.46V23.22h5.941v2.39c.024 4.44-3.467 7.716-8.244 7.716Zm40.665-19.073-7.453 7.3v11.773h-5.949V21.553l-7.452-7.301a6.317 6.317 0 0 1-1.762-2.407 6.233 6.233 0 0 1-.453-2.934V0h5.82v8.68c0 1.204 0 1.379.76 2.065l6.005 6.033 6.054-6.033c.76-.686.76-.861.76-2.065V0h5.884v8.911a6.29 6.29 0 0 1-.46 2.932 6.381 6.381 0 0 1-1.754 2.409Zm27.853 19.073H69.456V0h16.311c4.777 0 8.39 3.396 8.39 7.875v3.388a6.236 6.236 0 0 1-.504 2.88 6.32 6.32 0 0 1-1.767 2.348c.744.566 1.34 1.3 1.735 2.141s.58 1.764.536 2.69v4.136c0 4.48-3.613 7.867-8.39 7.867ZM88.192 7.47a2.3 2.3 0 0 0-.583-1.529 2.354 2.354 0 0 0-1.462-.767H75.195v8.68h10.37c2.102 0 2.627-.638 2.627-2.646V7.469Zm0 14.347c0-2.128-.525-2.758-2.425-2.758H75.162v9.134h10.953a2.363 2.363 0 0 0 1.462-.771 2.3 2.3 0 0 0 .583-1.532l.032-4.073Zm15.285 11.508V0h21.912v5.348h-16.117v8.617h12.472v5.46h-12.472v8.56h16.085v5.34h-21.88Zm50.574 0V22.166c0-2.128-.525-2.757-2.425-2.757H140.44v13.9h-5.772V0h16.974c4.777 0 8.277 3.276 8.277 7.763v3.62a6.496 6.496 0 0 1-.537 2.869 6.587 6.587 0 0 1-1.742 2.359 5.685 5.685 0 0 1 1.739 2.113c.398.833.583 1.75.54 2.67v11.892l-5.868.04Zm0-25.968a2.284 2.284 0 0 0-.578-1.528 2.346 2.346 0 0 0-1.459-.768H140.48v8.848h10.896c2.15 0 2.675-.574 2.675-2.59V7.356ZM17.362 74.132H0V40.807h17.362c4.777 0 8.277 3.276 8.277 7.755v17.815c0 4.48-3.5 7.755-8.277 7.755Zm2.328-25.857a2.12 2.12 0 0 0-.591-1.462 2.179 2.179 0 0 0-1.446-.666H5.812v22.637h11.825a2.171 2.171 0 0 0 1.445-.661c.379-.394.59-.916.592-1.459l.016-18.389Zm16.086 25.857V40.807H57.68v5.34H41.605v8.625h12.463v5.452H41.604v8.56H57.68v5.348H35.776Zm49.288 0h-8.932c-4.776 0-8.268-3.275-8.268-7.755V48.563c0-4.48 3.492-7.756 8.268-7.756h9.094a8.11 8.11 0 0 1 3.157.577 8.02 8.02 0 0 1 2.674 1.755 7.889 7.889 0 0 1 1.76 2.648c.4.992.592 2.052.564 3.118v2.017h-5.94v-2.527a2.128 2.128 0 0 0-.597-1.463 2.188 2.188 0 0 0-1.449-.665h-9.553a2.176 2.176 0 0 0-1.447.666 2.12 2.12 0 0 0-.59 1.462v18.213c0 .543.212 1.065.591 1.46.379.393.896.63 1.445.66h9.554a2.18 2.18 0 0 0 1.449-.66 2.12 2.12 0 0 0 .596-1.46v-2.59h5.941v2.391c-.04 4.448-3.508 7.723-8.317 7.723Zm39.332.973-10.952-15.511-3.96 4.256v10.362h-6.006V40.831h6.006v15.144l15.551-15.686 4.373 3.905-11.478 11.438 11.712 16.26-5.246 3.213Z" />
          <path opacity=".4" d="M133.602 74.403V69.35h26.099v5.053h-26.099Z" />
        </g>
        <defs>
          <clipPath id="a">
            <path fill="#fff" d="M0 0h160v74H0z" />
          </clipPath>
        </defs>
      </svg>
    )
  }
  const NFT = ({ className, image }) => {
    return (
      <div
        className={classnames(
          'absolute top-0 right-0 flex h-full flex-col rounded-lg bg-slate-50 shadow-md shadow-slate-900/10 ring-1 ring-slate-900/10 motion-safe:transition-all dark:bg-slate-500/70 dark:shadow-slate-900/30 dark:ring-inset dark:ring-slate-300/10 dark:backdrop-blur-xl -backdrop-blur:dark:bg-slate-600',
          className,
          // 'hover:translate-x-0 hover:rotate-0',
        )}>
        <div className="Image p-2 !pb-0 desktop:p-3">
          <div className="overflow-hidden rounded shadow shadow-slate-900/30">
            <Image
              src={image}
              className=""
              alt="NFT Image"
              width="400"
              height="400"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center text-sm font-medium text-center items-center-col grow ">
          <div className=" text-amber-600 dark:text-amber-300">
            First Settler
          </div>
          <div className="hidden uppercase text-2xs opacity-60 dark:text-slate-50 desktop:block">
            Premium Membership
          </div>
        </div>
      </div>
    )
  }

  const NFTs = ({ className }) => {
    return (
      <div
        className={classnames(
          'group relative flex-none tablet:h-[140px] tablet:w-[112px] desktop:h-[178px] desktop:w-[136px]',
          className,
        )}>
        <NFT image="/nfts/3.jpg" className="z-30 shadow-lg" />
        <NFT
          image="/nfts/2.jpg"
          className="z-20 -translate-x-4 translate-y-0.5 -rotate-[11deg] scale-[0.98] group-hover:translate-x-0 group-hover:translate-y-0 group-hover:rotate-0 group-hover:scale-100 group-hover:opacity-0"
        />
        <NFT
          image="/nfts/3.jpg"
          className="z-10 -translate-x-7 translate-y-1.5 -rotate-[20deg] scale-[0.96] group-hover:translate-y-0 group-hover:translate-x-0 group-hover:rotate-0 group-hover:scale-100 group-hover:opacity-0"
        />
      </div>
    )
  }

  return (
    <Card id="welcome" className="col-span-4" hideHeader>
      {/* Card Content */}

      <div className="flex flex-col gap-8 p-10">
        {/* Heading */}
        <div className="flex flex-col gap-8">
          <div className="flex items-center justify-between h-10 gap-8">
            <div className="h-[37px] w-[80px]">
              <Logo />
            </div>
            <Button
              external
              outlined
              href="http://cyberdeck.money"
              className="row tablet:hidden "
              title="Visit cyberdeck.money"
              attr={<BiLinkExternal className="opacity-75" size="16" />}
            />
          </div>
          <div className="relative flex flex-col gap-3 grow">
            <h2 className="text-4xl font-semibold 2xl:text-5xl 2xl:font-bold">
              Your Terra Control Center
            </h2>
            <span className="text-2xl font-light tracking-wide text-gray-600 dark:text-green-50/60">
              An easy to use, integrated dashboard for all your goals, whether
              you need to execute a quick move or watch your NFTs gain value
              over time.
            </span>
          </div>
        </div>
      </div>
      <Card.Line className="relative z-10 -mb-[1px] opacity-90" />
      <div className="flex flex-col gap-8 p-10 bg-gradient-to-b from-slate-200/50 dark:from-slate-900/10">
        {/* Become First Settler */}
        <div className="flex items-start mobile:flex-col tablet:gap-8 desktop:gap-16">
          {/* Intro */}
          <div className="flex flex-col gap-3">
            {/* Title */}
            <div className="flex flex-col ">
              <h3 className="text-sm font-semibold uppercase text-emerald-500 dark:text-emerald-400">
                Get Access First
              </h3>
              <span className="text-2xl font-medium ">
                Become a First Settler
              </span>
            </div>
            {/* Description */}
            <div className="relative flex flex-col gap-6 grow">
              <p className="text-xl tracking-wide text-gray-600 dark:text-green-50/60 2xl:text-2xl 2xl:font-light">
                Mint one of our First Settler Premium Memberships and be the
                first to use our product, never pay for premium features, and
                get rewarded in the future.
              </p>
            </div>
          </div>
          {/* NFT Stack */}
          <NFTs />
        </div>
        {/* Info */}
        <div className="flex flex-row gap-8 text-lg text-slate-700 dark:text-slate-50">
          <div className="flex flex-col gap-1">
            <h4 className="text-sm font-semibold uppercase text-slate-500 dark:text-slate-50/50">
              Release
            </h4>
            <p>First Settlers</p>
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="text-sm font-semibold uppercase text-slate-500 dark:text-slate-50/50">
              Amount
            </h4>
            <p>1111</p>
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="text-sm font-semibold uppercase text-slate-500 dark:text-slate-50/50">
              Price
            </h4>
            <p>250UST</p>
          </div>
        </div>
      </div>
    </Card>
  )
}

const RoadmapCard = () => {
  const Planet = ({ stage }) => {
    return (
      <Tabs.Trigger value={`screen${stage}`} asChild>
        <div
          className={classnames(
            stage == '1' && 'scale-[0.9]',
            stage == '2' && 'scale-[0.8]',
            stage == '3' && 'scale-[0.7]',
            'cursor-pointer appearance-none rounded-full outline-none group-hover:scale-100 motion-safe:transition-all',
            'state-active:scale-[1] state-active:ring-2 state-active:ring-primary-500 state-active:ring-offset-2 state-active:ring-offset-slate-50 dark:state-active:ring-offset-slate-800',
          )}>
          <div
            className={classnames(
              stage == '1' && 'motion-safe:animate-rotating-fast',
              stage == '2' && 'motion-safe:animate-rotating',
              stage == '3' && 'motion-safe:animate-rotating-slow',
              'Image h-12 w-12 rounded-full motion-safe:transition-all dark:state-active:ring-offset-slate-800',
            )}>
            <div
              className={classnames(
                'relative h-full w-full',
                'motion-safe:transition-transform',
              )}>
              <div
                className={classnames(
                  'absolute inset-0 z-10 rounded-full  ',
                  'ring-primary-500 state-active:ring-2',
                )}>
                <Image
                  src={`/roadmap/stage${stage}.webp`}
                  alt=""
                  width="100%"
                  height="100%"
                />
              </div>
              <div className="absolute inset-0 z-0 rounded-full overlay:hidden opacity-30 blur will-change-transform">
                <Image
                  src={`/roadmap/glow${stage}.webp`}
                  alt=""
                  width="100%"
                  height="100%"
                />
              </div>
            </div>
          </div>
        </div>
      </Tabs.Trigger>
    )
  }
  const Stage1 = () => {
    return (
      <div className="flex flex-col gap-6 p-8 pt-0">
        {/* Current Stage Title */}
        <div className="flex items-center ">
          <h3 className="flex flex-col text-sm font-semibold uppercase grow">
            <span className="text-primary-500 dark:text-primary-400">
              Stage 1
            </span>
            <span className="opacity-60">Announcement</span>
          </h3>
          <div className="flex items-center h-6 gap-1 px-2 text-xs font-semibold leading-6 uppercase rounded-full bg-primary-200 text-primary-600 dark:bg-primary-400/20 dark:text-primary-400">
            In Progress
          </div>
        </div>
        <Card.Line />

        {/* Goals */}
        <div className="flex flex-col gap-4 grow">
          {/* Launch Website */}
          <div className="flex flex-col">
            <h3 className="flex items-center justify-between gap-2 text-lg font-medium">
              Launch Website
              <span className="flex items-center gap-1 text-xs uppercase rounded-full text-emerald-600 dark:text-emerald-400">
                <BiBadgeCheck size="16" />
                Done
              </span>
            </h3>
            <p className="opacity-60">
              Publish the website and get the word out on Twitter.
            </p>
          </div>

          {/* Open Discord */}
          <div className="flex flex-col">
            <h3 className="flex items-center justify-between gap-2 text-lg font-medium">
              Open Discord
              <span className="flex items-center gap-1 text-xs uppercase rounded-full text-emerald-600 dark:text-emerald-400">
                <BiBadgeCheck size="16" />
                Done
              </span>
            </h3>
            <p className="opacity-60">
              Open our Discord SO pass holders can join a and have a chill place
              to chat.
            </p>
          </div>

          {/* Mint Passes */}
          <div className="flex flex-col">
            <h3 className="flex items-center justify-between gap-2 text-lg font-medium">
              Mint Passes
              <span className="flex items-center gap-1 text-xs uppercase rounded-full whitespace-nowrap text-primary-600 dark:text-primary-400">
                <BiPlanet size="16" />
                Minting Soon
              </span>
            </h3>
            <p className="opacity-60">
              Publish our First Settler access passes. Minting on
              {` `}
              <a href="https://knowhere.art/launchpad">Knowhere</a> on the
              {` `}
              <time
                className="underline decoration-dotted underline-offset-1 "
                datetime="2008-02-14 20:00">
                18th of April at 6pm UTC
              </time>
              .
            </p>
          </div>

          {/* Alpha Designs */}
          <div className="flex flex-col">
            <h3 className="flex items-center justify-between gap-2 text-lg font-medium">
              Alpha Designs
              <span className="flex items-center gap-1 text-xs uppercase rounded-full whitespace-nowrap text-slate-500 dark:text-slate-50/40">
                <BiPalette size="16" />
                in Progress
              </span>
            </h3>
            <p className="opacity-60">
              Finalise the design and flow to prepare for development for the
              next stage.
            </p>
          </div>
        </div>
      </div>
    )
  }
  const Stage2 = () => {
    return (
      <div className="flex flex-col gap-6 p-8 pt-0">
        {/* Current Stage Title */}
        <div className="flex items-center">
          <h3 className="flex flex-col text-sm font-semibold uppercase grow">
            <span className="text-primary-500 dark:text-primary-400">
              Stage 2
            </span>
            <span className="opacity-60">Alpha Development</span>
          </h3>
        </div>

        <Card.Line />

        {/* Goals */}
        <div className="flex flex-col gap-4 grow">
          {/* Launch Website */}
          <div className="flex flex-col">
            <h3 className="flex items-center justify-between gap-2 text-lg font-medium">
              Alpha Development
              <span className="flex items-center gap-1 text-xs uppercase rounded-full text-primary-600 dark:text-primary-400">
                <BiRun size="16" />
                Ahead
              </span>
            </h3>
            <p className="opacity-60">
              We start working on the first version of Cyberdeck. We will put a
              usable version of our product in your hands as soon as we can.
            </p>
          </div>

          {/* Open Discord */}
          <div className="flex flex-col">
            <h3 className="flex items-center justify-between gap-2 text-lg font-medium">
              Locate our CTO
              <span className="flex items-center gap-1 text-xs uppercase rounded-full whitespace-nowrap text-slate-500 dark:text-slate-50/40">
                <BiCheckbox size="16" />
                Next
              </span>
            </h3>
            <p className="opacity-60">
              We know they&rsquo;re out there! To make Cyberdeck the best it can be,
              we&rsquo;ll need a CTO. Currently looking
            </p>
          </div>

          {/* Mint Passes */}
          <div className="flex flex-col">
            <h3 className="flex items-center justify-between gap-2 text-lg font-medium">
              Beta Designs
              <span className="flex items-center gap-1 text-xs uppercase rounded-full whitespace-nowrap text-slate-500 dark:text-slate-50/40">
                <BiCheckbox size="16" />
                Next
              </span>
            </h3>
            <p className="opacity-60">
              Finalise the design and flow to prepare for development for the
              next stage.
            </p>
          </div>

          {/* Alpha Designs */}
          <div className="flex flex-col">
            <h3 className="flex items-center justify-between gap-2 text-lg font-medium">
              Finalise the Team
              <span className="flex items-center gap-1 text-xs uppercase rounded-full whitespace-nowrap text-slate-500 dark:text-slate-50/40">
                <BiCheckbox size="16" />
                Next
              </span>
            </h3>
            <p className="opacity-60">
              Finalise the team that will take design and development to the
              next level.
            </p>
          </div>
        </div>
      </div>
    )
  }
  const Stage3 = () => {
    return (
      <div className="flex flex-col gap-6 p-8 pt-0">
        {/* Current Stage Title */}
        <h3 className="flex flex-col text-sm font-semibold uppercase">
          <span className="text-primary-500 dark:text-primary-400">
            Stage 3
          </span>
          <span className="opacity-60">Alpha Release</span>
        </h3>
        <Card.Line />

        {/* Goals */}
        <div className="flex flex-col gap-4 grow">
          {/* Launch Alpha */}
          <div className="flex flex-col">
            <h3 className="flex items-center justify-between gap-2 text-lg font-medium">
              Launch Alpha
              <span className="flex items-center gap-1 text-xs uppercase rounded-full whitespace-nowrap text-slate-500 dark:text-slate-50/40">
                <BiCheckbox size="16" />
                Later
              </span>
            </h3>
            <p className="opacity-60">
              We&rsquo;ll release a low fidelity Alpha, to get Cyberdeck in your hands
              as soon as possible. First Settler feedback will drive the
              direction of the Alpha and help shape Cyberdeck.
            </p>
          </div>

          {/* Open Discord */}
          <div className="flex flex-col">
            <h3 className="flex items-center justify-between gap-2 text-lg font-medium">
              Define Beta
              <span className="flex items-center gap-1 text-xs uppercase rounded-full whitespace-nowrap text-slate-500 dark:text-slate-50/40">
                <BiCheckbox size="16" />
                Later
              </span>
            </h3>
            <p className="opacity-60">
              Using what we&rsquo;ve learned from the Alpha, we&rsquo;ll begin private Beta
              development. The Beta will contain many of the core features, like
              sending and swapping Terra money, and NFT management.
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <Card id="roadmap" hideHeader className="col-span-2" title="Roadmap">
      {/* Card Content */}
      <Tabs.Root defaultValue="screen1" orientation="horizontal">
        <div className="flex flex-col">
          {/* Planets */}
          <Tabs.List asChild aria-label="tabs example">
            <div className="flex items-center gap-6 px-8 overflow-hidden group bg-gradient-to-b from-slate-200 pb-7 pt-9 dark:from-slate-900/10">
              <Planet stage="1" />
              <Planet stage="2" />
              <Planet stage="3" />
            </div>
          </Tabs.List>
          <Tabs.Content value="screen1" tabIndex="-1">
            <Stage1 />
          </Tabs.Content>
          <Tabs.Content value="screen2" tabIndex="-1">
            <Stage2 />
          </Tabs.Content>
          <Tabs.Content value="screen3" tabIndex="-1">
            <Stage3 />
          </Tabs.Content>
          {/* Stages */}
        </div>
      </Tabs.Root>
    </Card>
  )
}

export default Welcome

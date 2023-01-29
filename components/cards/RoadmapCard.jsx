import { Card } from '@/components/layout'
import * as Tabs from '@radix-ui/react-tabs'
import classnames from 'classnames'
import Image from "next/legacy/image";
import { AiOutlineGold } from 'react-icons/ai'
import { BiPaintRoll } from 'react-icons/bi'
import { CheckComplete } from '../interface/Icons'
import TagLabel from '../interface/TagLabel'
import { CardDoubleHeader } from '../layout/Card/Card'

const RoadmapCard = ({ className }) => {
  const Planet = ({ stage, complete }) => {
    return (
      <Tabs.Trigger value={`screen${stage}`} asChild>
        <div
          className={classnames(
            'cursor-pointer appearance-none rounded-full outline-none group-hover:scale-100 motion-safe:transition-all',
            'active:!scale-95 state-active:scale-[1] state-active:ring-2 state-active:ring-[#22C45E] state-active:ring-offset-2 state-active:ring-offset-slate-50 state-active:dark:ring-[#22C45E]/80 dark:state-active:ring-offset-slate-800',
          )}>
          <div
            className={classnames(
              stage === '1' && 'motion-safe:animate-rotating-fast',
              stage === '2' && 'motion-safe:animate-rotating',
              stage === '3' && 'motion-safe:animate-rotating-slow',
              stage === '4' && 'motion-safe:animate-rotating-slow',
              stage === '5' && 'motion-safe:animate-rotating-slow',
              complete && 'motion-safe:animate-none',
              'Image h-12 w-12 rounded-full motion-safe:transition-all dark:state-active:ring-offset-slate-800',
            )}>
            <div
              className={classnames(
                'relative h-full w-full select-none',
                'motion-safe:transition-transform',
              )}>
              <div
                className={classnames(
                  ' pointer-events-none absolute inset-0 z-10 rounded-full bg-[#F8FAFC] ',
                  'ring-primary-500 state-active:ring-2',
                )}>
                <Image
                  className={classnames('z-20 object-cover', {
                    '!opacity-40': complete,
                  })}
                  src={`/roadmap/stage${stage}.png`}
                  alt=""
                  width="100%"
                  height="100%"
                />

                {complete && (
                  <div className="absolute inset-0 z-10 flex h-full w-full items-center justify-center rounded-full bg-[#22C55E]/60">
                    <CheckComplete className="stroke-green-800" />
                  </div>
                )}
              </div>
              <div className="overlay:hidden pointer-events-none absolute inset-0 z-0 rounded-full opacity-20 blur will-change-transform">
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

  const Line = () => {
    return <Card.FadedLine />
  }

  const Item = ({ title, children, status, color, icon, tag }) => {
    return (
      <div className="flex flex-col">
        <Card.Item title={title} text={children} status={tag} />
      </div>
    )
  }

  const Stage1 = () => {
    return (
      <div className="flex flex-col gap-6 p-7 pl-0">
        {/* Current Stage Title */}
        <CardDoubleHeader
          className="pl-7"
          subtitle="Roadmap"
          title="Stage 1 - Announcement"
        />
        <Line />

        {/* Goals */}
        <div className="grid-cols-auto desktop:grid-cols-auto-three grid gap-y-6 gap-x-8 pl-7">
          {/* Launch Website */}
          <Item
            title="Launch Website"
            tag={<TagLabel className="ml-2" label="Done" color="green" />}>
            Publish the website and get the word out on social media platforms.
          </Item>
          <Item
            title="Open Discord"
            tag={<TagLabel className="ml-2" label="Done" color="green" />}>
            Open our Discord SO pass holders can join a and have a chill place
            to chat.
          </Item>
          <Item
            title="Mint"
            tag={<TagLabel className="ml-2" label="Minted Out" color="green" />}
            icon={<AiOutlineGold size="16" />}>
            We sold all our First Settlers within 4 days.
          </Item>
          <Item
            title="Alpha Designs"
            tag={<TagLabel className="ml-2" label="Done" color="green" />}
            icon={<BiPaintRoll size="16" />}>
            Finalise the design and flow to prepare for development for the next
            stage.
          </Item>
        </div>
      </div>
    )
  }
  const Stage2 = () => {
    return (
      <div className="flex flex-col gap-6 p-7 pl-0">
        {/* Current Stage Title */}
        <CardDoubleHeader
          className="pl-7"
          subtitle="Roadmap"
          title="Stage 2 - Alpha"
        />
        <Line />

        {/* Goals */}
        <div className="grid-cols-auto desktop:grid-cols-auto-three grid gap-y-6 gap-x-8 pl-7">
          {/* Launch Website */}
          <Item
            title="Start Alpha Development"
            tag={<TagLabel className="ml-2" label="Done" color="green" />}>
            Alpha is all about having the static frame of the app, and laying
            the foundation for a performant and scalable platform.
          </Item>
          <Item
            title="Finalise Alpha Designs"
            tag={
              <TagLabel className="ml-2" label="In Progress" color="blue" />
            }>
            We currently only have the Welcome page and Dashboard page, and
            remaining pages are currently being designed.
          </Item>
          <Item
            title="Find Senior Engineer"
            tag={
              <TagLabel className="ml-2" label="In Progress" color="blue" />
            }>
            We&lsquo;re currently talking to a senior engineer that will help us built
            a solid base that can deal with a ton of live data.
          </Item>
          <Item
            title="Look for CTO"
            tag={<TagLabel className="ml-2" label="Next" color="gray" />}>
            Cyberdeck is currently being built by one founder and one
            contractor. We&lsquo;ll soon look around in our close network for someone
            suitable.
          </Item>
        </div>
      </div>
    )
  }
  const Stage3 = () => {
    return (
      <div className="flex flex-col gap-6 p-7 pl-0">
        {/* Current Stage Title */}
        <CardDoubleHeader
          className="pl-7"
          subtitle="Roadmap"
          title="Stage 3 - Private Beta"
        />
        <Line />

        {/* Goals */}
        <div className="grid-cols-auto desktop:grid-cols-auto-three grid gap-y-6 gap-x-8 pl-7"></div>
      </div>
    )
  }

  const Stage4 = () => {
    return (
      <div className="flex flex-col gap-6 p-7 pl-0">
        {/* Current Stage Title */}
        <CardDoubleHeader
          className="pl-7"
          subtitle="Roadmap"
          title="Stage 4 - Open Beta"
        />
        <Line />

        {/* Goals */}
        <div className="grid-cols-auto desktop:grid-cols-auto-three grid gap-y-6 gap-x-8 pl-7"></div>
      </div>
    )
  }

  const Stage5 = () => {
    return (
      <div className="flex flex-col gap-6 p-7 pl-0">
        {/* Current Stage Title */}
        <CardDoubleHeader
          className="pl-7"
          subtitle="Roadmap"
          title="Stage 5 - Launch"
        />
        <Line />

        {/* Goals */}
        <div className="grid-cols-auto desktop:grid-cols-auto-three grid gap-y-6 gap-x-8 pl-7"></div>
      </div>
    )
  }

  return (
    <Card
      id="roadmap"
      hideHeader
      overflowHidden
      className={className}
      title="Roadmap">
      {/* Card Content */}
      <Tabs.Root defaultValue="screen2" orientation="horizontal">
        <div className="flex flex-none flex-row">
          {/* Planets */}
          <Tabs.List asChild aria-label="tabs example">
            <div className="group flex flex-none flex-col items-center gap-2.5 overflow-hidden bg-gradient-to-b from-slate-200 px-6 pb-7 pt-7 dark:from-slate-900/10">
              <Planet stage="1" complete />
              <div className="grid h-[34px] grid-flow-row grid-rows-1 gap-1.5">
                <span className="h-full w-[2px] rounded-full bg-green-500/70" />
              </div>
              <Planet stage="2" />
              <div className="grid h-[85px] grid-flow-row grid-rows-4 gap-1.5">
                <span className="h-full w-[2px] rounded-full bg-green-500/70" />
                <span className="h-full w-[2px] rounded-full bg-slate-500/20 dark:bg-slate-300/20" />
                <span className="h-full w-[2px] rounded-full bg-slate-500/20 dark:bg-slate-300/20" />
                <span className="h-full w-[2px] rounded-full bg-slate-500/20 dark:bg-slate-300/20" />
              </div>
              <Planet stage="3" />
              <div className="grid h-[34px] grid-flow-row grid-rows-1 gap-1.5">
                <span className="h-full w-[2px] rounded-full bg-slate-500/20 dark:bg-slate-300/20" />
              </div>
              <Planet stage="4" />
              <div className="grid h-[34px] grid-flow-row grid-rows-1 gap-1.5">
                <span className="h-full w-[2px] rounded-full bg-slate-500/20 dark:bg-slate-300/20" />
              </div>
              <Planet stage="5" />
            </div>
          </Tabs.List>
          <Tabs.Content value="screen1" tabIndex="-1" className="grow">
            <Stage1 />
          </Tabs.Content>
          <Tabs.Content value="screen2" tabIndex="-1" className="grow">
            <Stage2 />
          </Tabs.Content>
          <Tabs.Content value="screen3" tabIndex="-1" className="grow">
            <Stage3 />
          </Tabs.Content>
          <Tabs.Content value="screen4" tabIndex="-1" className="grow">
            <Stage4 />
          </Tabs.Content>
          <Tabs.Content value="screen5" tabIndex="-1" className="grow">
            <Stage5 />
          </Tabs.Content>
          {/* Stages */}
        </div>
      </Tabs.Root>
    </Card>
  )
}

export default RoadmapCard

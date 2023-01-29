import { Card } from '@/components/layout'
import * as Tabs from '@radix-ui/react-tabs'
import { default as classnames, default as classNames } from 'classnames'
import Image from 'next/legacy/image'
import { useState } from 'react'
import { FaDribbble } from 'react-icons/fa'
import { Twitter } from '../interface/Icons'
import ScrollArea from '../interface/ScrollArea'
import TagLabel from '../interface/TagLabel'
import { CardDoubleHeader } from '../layout/Card/Card'

export default function TeamCard({ className }) {
  const Avatar = ({ stage, staff }) => {
    return (
      <Tabs.Trigger value={`screen${stage}`} asChild>
        <div
          className={classnames(
            'cursor-pointer appearance-none rounded-full shadow-md outline-none group-hover:scale-100 motion-safe:transition-all',
            'active:!scale-95 state-active:scale-[1] state-active:ring-2 state-active:ring-[#22C45E] state-active:ring-offset-2 state-active:ring-offset-slate-50 state-active:dark:ring-[#22C45E]/80 dark:state-active:ring-offset-slate-800',
          )}>
          <div
            className={classnames(
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
                  className={classnames('z-20 object-cover', {})}
                  src={`/images/avatars/${staff}.png`}
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

  const StaffPage = ({ title, tags, name, text, social }) => {
    return (
      <div className="flex flex-col overflow-hidden pt-7 pr-0 pl-0 md:pb-7 2xl:h-[570px]">
        {/* Current Stage Title */}
        <CardDoubleHeader className="px-7" subtitle="The Team" title={title} />

        <div className="mb-4 mt-3 flex items-center gap-2.5 px-7">
          {tags.map((tag, idx) => (
            <TagLabel key={idx} label={tag} />
          ))}
        </div>

        <span className="relative -left-1 flex items-center justify-start">
          <Line className="" />
        </span>

        <ScrollArea>
          <div
            className={classnames(
              'flex flex-1 flex-col gap-6  pl-7 pr-7 pb-7 pt-5 transition-all',
            )}>
            <Card.Item title={name} text={text} />

            {social?.map((item, idx) => (
              <Card.Item
                key={idx}
                link={item.link}
                title={item.name}
                text={item.description}
                icon={item.icon}
              />
            ))}
          </div>
        </ScrollArea>
      </div>
    )
  }

  return (
    <Card
      id="team"
      hideHeader
      overflowHidden
      className={className}
      title="Team">
      <Tabs.Root
        className="overflow-hidden"
        defaultValue="screen1"
        orientation="horizontal">
        <div className="flex flex-none flex-row overflow-hidden">
          <Tabs.List asChild aria-label="tabs example">
            <div className="group flex flex-none flex-col items-center gap-2.5 overflow-hidden bg-gradient-to-b from-slate-200 px-6 pb-7 pt-7 dark:from-slate-900/10">
              <Avatar stage="1" staff="wirehead" />

              <div className="grid h-[34px] grid-flow-row grid-rows-1 gap-1.5">
                <span className="h-full w-[2px] rounded-full bg-slate-500/20 dark:bg-slate-300/20" />
              </div>
              <Avatar stage="2" staff="bob" />

              <div className="grid h-[34px] grid-flow-row grid-rows-1 gap-1.5">
                <span className="h-full w-[2px] rounded-full bg-slate-500/20 dark:bg-slate-300/20" />
              </div>
              <Avatar stage="3" staff="other" />
            </div>
          </Tabs.List>

          <Tabs.Content value="screen1" tabIndex="-1">
            <StaffPage
              title="Wirehead Studio"
              tags={['Founder', 'Developer', 'Designer']}
              name="Jonno Riekwel"
              text="Hey, I'm Jonno, a designer and front-end developer with 18 years of experience in the tech industry, designing user interfaces for companies big and small. Now it's finally time for my own product."
              social={[
                {
                  name: '@WireheadStudio',
                  description: 'My agency in the crypto space',
                  link: 'https://twitter.com/wireheadstudio',
                  icon: (
                    <Twitter className="stroke-slate-400 dark:stroke-slate-300/70" />
                  ),
                },

                {
                  name: '@Jonnotie',
                  description: 'My personal account',
                  link: 'https://twitter.com/jonnotie',
                  icon: (
                    <Twitter className="stroke-slate-400 dark:stroke-slate-300/70" />
                  ),
                },
                {
                  name: '@Jonnotie',
                  description: 'My freelance design work',
                  link: 'https://dribbble.com/jonnotie',
                  icon: (
                    <FaDribbble className="text-slate-400 dark:text-slate-300/70" />
                  ),
                },
              ]}
            />
          </Tabs.Content>
          <Tabs.Content value="screen2" tabIndex="-1">
            <StaffPage
              title={`Bob The Builder`}
              tags={['Frontend Developer']}
              name="Bob Mckinny"
              text="Bob is a robot sent back in time to make sure that Wirehead successfully completes the Cyberdeck project. His machine-like work ethic, keen eye for detail, and wealth of knowledge surrounding frontend development make him an incredibly valuable asset to the Cyberdeck team."
              social={[
                {
                  name: '@CyberdeckMoney',
                  description: 'Official Cyberdeck twitter',
                  link: 'https://twitter.com/cyberdeckmoney',
                  icon: (
                    <Twitter className="stroke-slate-400 dark:stroke-slate-300/70" />
                  ),
                },
              ]}
            />
          </Tabs.Content>
          <Tabs.Content value="screen3" tabIndex="-1">
            <StaffPage
              title="Ace Ventura"
              tags={['Unknown']}
              name="Ace Ventura"
              text="A 1994 American comedy film starring Jim Carrey as Ace Ventura, an animal detective who is tasked with finding the abducted dolphin who is the mascot of the US football team Miami Dolphins."
              social={[
                {
                  name: '@CyberdeckMoney',
                  description: 'Official Cyberdeck twitter',
                  link: 'https://twitter.com/cyberdeckmoney',
                  icon: (
                    <Twitter className="stroke-slate-400 dark:stroke-slate-300/70" />
                  ),
                },
              ]}
            />
          </Tabs.Content>
        </div>
      </Tabs.Root>
    </Card>
  )
}

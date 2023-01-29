import { Button } from '@/components/forms'
import Image from 'next/legacy/image'
import { BiLinkExternal } from 'react-icons/bi'

function PartnerCard({ name, logo, cover, link }) {
  return (
    <div
      onClick={() => window.open('https://' + link, '_blank')}
      className="group relative flex w-full cursor-pointer flex-col items-center justify-center gap-1 overflow-hidden rounded-lg py-6 px-8 shadow-lg shadow-slate-900/[0.25] desktop:py-8">
      <h1 className="relative z-20 flex h-20 items-center justify-center">
        {logo}
      </h1>
      <Button
        className="z-20 mt-3 !shadow-md ring-white/10"
        title={link}
        external
        href={'https://' + link}
        type="primary"
        attr={<BiLinkExternal size="16" />}
      />

      <Image
        src={cover}
        className="absolute top-0 left-0 z-10 flex h-full w-full items-center justify-center overflow-hidden rounded-lg object-cover object-center opacity-[0.95] group-hover:brightness-105 group-hover:saturate-[1.25] motion-safe:transition dark:opacity-90"
        layout="fill"
      />

      <span className="pointer-events-none absolute top-0 left-0 z-20 h-full w-full overflow-hidden rounded-lg ring-1 ring-inset ring-white/[0.08]" />
    </div>
  )
}

export default function PartnerCards({ className }) {
  return (
    <div className="gutter col-span-12 grid xl:grid-cols-2 2xl:grid-cols-4">
      <PartnerCard
        name="Ceres"
        logo={
          <Image
            src="/images/partners/ceres-logo.png"
            className="object-cover object-center"
            width={223}
            height={28}
            alt={'Ceres'}
          />
        }
        cover="/images/partners/ceres-bg.png"
        link="ceres.ventures"
      />
      <PartnerCard
        name="PS Labs"
        logo={
          <Image
            src="/images/partners/pslabs-logo.png"
            className="object-cover object-center"
            width={37}
            height={56}
            alt={'PS Labs'}
          />
        }
        cover="/images/partners/pslabs-bg.png"
        link="ps-labs.io"
      />
      <PartnerCard
        name="Terra Spaces"
        logo={
          <Image
            src="/images/partners/terraspaces-logo.png"
            className="object-cover object-center"
            width={224}
            height={74}
            alt={'Terra Spaces'}
          />
        }
        cover="/images/partners/terraspaces-bg.png"
        link="terraspaces.org"
      />
      <PartnerCard
        name="Hermes"
        logo={
          <Image
            src="/images/partners/hermes-logo.png"
            className="object-cover object-center"
            width={80}
            height={74}
            alt={'Hermes'}
          />
        }
        cover="/images/partners/hermes-bg.png"
        link="hermesprotocol.io"
      />
    </div>
  )
}

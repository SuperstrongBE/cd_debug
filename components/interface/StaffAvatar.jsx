import Image from "next/legacy/image";

export default function StaffAvatar({ user, size, className }) {
  return (
    <span
      className="dark:soft-filter-shadow flex items-center justify-center"
      style={{
        width: size + 'px' || '16px',
        height: size + 'px' || '16px',
      }}>
      <Image
        src={
          user === 'Bob'
            ? '/images/avatars/bob.png'
            : user === 'Wirehead'
            ? '/images/avatars/wirehead.png'
            : 'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='
        }
        width={48}
        height={48}
        alt={user}
      />
    </span>
  )
}

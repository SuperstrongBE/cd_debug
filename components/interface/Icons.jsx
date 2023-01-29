function ArrowDown({ className, color }) {
  return (
    <svg
      className={className}
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6 2.5L6 9.5"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 6L6 9.5L2.5 6"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ArrowUp({ className, color }) {
  return (
    <svg
      className={className}
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6 9.5L6 2.5"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 6L6 2.5L9.5 6"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ArrowSwap({ className, color }) {
  return (
    <svg
      className={className}
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g opacity="0.8">
        <path
          d="M3.5 8.5V1"
          stroke={color}
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1.5 3L3.5 1L5.5 3"
          stroke={color}
          strokeLinecap="round"
          strokeWidth="1.25"
          strokeLinejoin="round"
        />
        <path
          d="M8.5 3V11"
          stroke={color}
          strokeLinecap="round"
          strokeWidth="1.25"
          strokeLinejoin="round"
        />
        <path
          d="M6.5 9L8.5 11L10.5 9"
          stroke={color}
          strokeLinecap="round"
          strokeWidth="1.25"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  )
}

function ArrowRefresh({ className, color }) {
  return (
    <svg
      className={className}
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g opacity="0.8" clipPath="url(#clip0_7139_3584)">
        <path
          d="M8.5 0.5L10.5 2.5M10.5 2.5L8.5 4.5M10.5 2.5H3.5C2.96957 2.5 2.46086 2.71071 2.08579 3.08579C1.71071 3.46086 1.5 3.96957 1.5 4.5V5.5M3.5 11.5L1.5 9.5M1.5 9.5L3.5 7.5M1.5 9.5H8.5C9.03043 9.5 9.53914 9.28929 9.91421 8.91421C10.2893 8.53914 10.5 8.03043 10.5 7.5V6.5"
          stroke={color}
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_7139_3584">
          <rect width="12" height="12" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

function Airdrop({ className, color }) {
  return (
    <svg
      className={className}
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g opacity="0.8">
        <path
          d="M0.75 2.8833L1.38333 4.01663H7.71667C8.7661 4.01663 9.61667 4.77767 9.61667 5.71663V6.2833C9.61667 7.22227 8.7661 7.9833 7.71667 7.9833H5.81667C4.76723 7.9833 3.91667 7.22227 3.91667 6.2833V5.14997"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3.2832 1.75H9.61654"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.4502 2.88333V1.75"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3.2832 10.25H8.98321C9.68304 10.25 10.2499 9.74287 10.2499 9.1167"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.81647 7.9834L4.5498 10.2501"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.7168 7.9834L8.98346 10.2501"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  )
}

function Send({ className, color }) {
  return (
    <svg
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7.46955 12.2728H2.1665V4.69702H18.8332V13.0304"
        stroke="#F8FAFC"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.19678 12.2728V12.6516C5.19678 15.7894 7.74072 18.3334 10.8786 18.3334C14.0165 18.3334 16.5604 15.7894 16.5604 12.6516V6.96973C14.8869 6.96973 13.5301 8.32655 13.5301 10V11.5152C11.8566 11.5152 10.4998 12.872 10.4998 14.5455"
        stroke="#F8FAFC"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.4998 9.24245C10.9182 9.24245 11.2573 8.90327 11.2573 8.48487C11.2573 8.06647 10.9182 7.72729 10.4998 7.72729C10.0814 7.72729 9.74219 8.06647 9.74219 8.48487C9.74219 8.90327 10.0814 9.24245 10.4998 9.24245Z"
        stroke="#F8FAFC"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.4998 9.24245C10.9182 9.24245 11.2573 8.90327 11.2573 8.48487C11.2573 8.06647 10.9182 7.72729 10.4998 7.72729C10.0814 7.72729 9.74219 8.06647 9.74219 8.48487C9.74219 8.90327 10.0814 9.24245 10.4998 9.24245Z"
        stroke="#F8FAFC"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.8029 4.69706V3.93948C15.8029 2.68417 14.7854 1.66675 13.5301 1.66675H7.46951C6.2142 1.66675 5.19678 2.68417 5.19678 3.93948V4.69706"
        stroke="#F8FAFC"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
function MoneyReceive({ className, color }) {
  return (
    <svg
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        className={className}
        d="M14.623 9.98963C15.6677 9.98963 16.5145 9.14275 16.5145 8.09808C16.5145 7.05342 15.6677 6.20654 14.623 6.20654C13.5783 6.20654 12.7314 7.05342 12.7314 8.09808C12.7314 9.14275 13.5783 9.98963 14.623 9.98963Z"
        stroke="#F8FAFC"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className={className}
        d="M8.56976 5.44983C9.61443 5.44983 10.4613 4.60296 10.4613 3.55829C10.4613 2.51362 9.61443 1.66675 8.56976 1.66675C7.52509 1.66675 6.67822 2.51362 6.67822 3.55829C6.67822 4.60296 7.52509 5.44983 8.56976 5.44983Z"
        stroke="#F8FAFC"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className={className}
        d="M11.5782 13.016H15.7578C17.8892 13.016 18.0276 14.5292 18.0276 14.5292L9.12603 17.9529C8.53057 18.1821 7.86626 18.1496 7.29577 17.8644L2.13867 15.2858V9.9895H2.89529C3.73135 9.9895 5.85063 10.3209 6.67837 11.5027H8.94822C10.6196 11.5027 11.9747 12.8578 11.9747 14.5292H6.67837"
        stroke="#F8FAFC"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
function Swap({ className, color }) {
  return (
    <svg
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6.3335 14.1667V1.66675"
        stroke="#F8FAFC"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 5.00008L6.33333 1.66675L9.66667 5.00008"
        stroke="#F8FAFC"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.6665 5V18.3333"
        stroke="#F8FAFC"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.3335 15L14.6668 18.3333L18.0002 15"
        stroke="#F8FAFC"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
function OTC({ className, color }) {
  return (
    <svg
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16.5543 15.1038L18.227 16.3636C18.6088 16.65 18.8331 17.0985 18.8331 17.5757V18.3333H12.7725V17.5757C12.7725 17.0985 12.9967 16.65 13.3785 16.3636L15.0512 15.1038"
        stroke="#F8FAFC"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.8027 15.303C14.9656 15.303 14.2876 14.625 14.2876 13.7879V13.0303C14.2876 12.1932 14.9656 11.5151 15.8027 11.5151C16.6399 11.5151 17.3179 12.1932 17.3179 13.0303V13.7879C17.3179 14.625 16.6399 15.303 15.8027 15.303Z"
        stroke="#F8FAFC"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.94832 5.25537L7.62105 6.51522C8.00287 6.80158 8.22711 7.25007 8.22711 7.72734V8.48492H2.1665V7.72734C2.1665 7.25007 2.39075 6.80158 2.77256 6.51522L4.44529 5.25537"
        stroke="#F8FAFC"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.19679 5.45463C4.35967 5.45463 3.68164 4.7766 3.68164 3.93948V3.1819C3.68164 2.34478 4.35967 1.66675 5.19679 1.66675C6.03391 1.66675 6.71194 2.34478 6.71194 3.1819V3.93948C6.71194 4.7766 6.03391 5.45463 5.19679 5.45463Z"
        stroke="#F8FAFC"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.2573 4.69702H17.3179V8.4849"
        stroke="#F8FAFC"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.5301 2.42432L11.2573 4.69704L13.5301 6.96977"
        stroke="#F8FAFC"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.74225 15.303H3.68164V11.5151"
        stroke="#F8FAFC"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.46973 17.5757L9.74245 15.303L7.46973 13.0303"
        stroke="#F8FAFC"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
function Settings({ className, color }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      fill="none"
      viewBox="0 0 18 18">
      <g
        stroke="#F8FAFC"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        opacity="0.7">
        <path d="M9.013 11.176a2.114 2.114 0 100-4.227 2.114 2.114 0 000 4.227z"></path>
        <path d="M14.226 11.176a1.163 1.163 0 00.233 1.282l.042.043a1.41 1.41 0 11-1.994 1.994l-.042-.043a1.163 1.163 0 00-1.282-.232 1.163 1.163 0 00-.705 1.064v.12a1.41 1.41 0 11-2.818 0v-.064a1.163 1.163 0 00-.76-1.064 1.163 1.163 0 00-1.283.233l-.042.042a1.41 1.41 0 11-1.994-1.994l.042-.042a1.163 1.163 0 00.232-1.283 1.163 1.163 0 00-1.063-.704h-.12a1.41 1.41 0 010-2.818h.063A1.162 1.162 0 003.8 6.949a1.162 1.162 0 00-.232-1.282l-.043-.043A1.41 1.41 0 115.518 3.63l.042.043a1.162 1.162 0 001.283.232h.056a1.162 1.162 0 00.705-1.064v-.12a1.41 1.41 0 012.818 0v.064a1.162 1.162 0 00.704 1.064 1.162 1.162 0 001.283-.233l.042-.042a1.41 1.41 0 111.994 1.994l-.043.042a1.162 1.162 0 00-.232 1.283v.056a1.162 1.162 0 001.064.704h.12a1.41 1.41 0 110 2.819h-.064a1.162 1.162 0 00-1.064.704v0z"></path>
      </g>
    </svg>
  )
}

function EyeOff({ className, color }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g opacity="0.5" clipPath="url(#clip0_4392_11561)">
        <path
          d="M4.95 2.12C5.29417 2.03944 5.64653 1.99917 6 2C9.5 2 11.5 6 11.5 6C11.1965 6.5678 10.8345 7.10237 10.42 7.595M7.06 7.06C6.92268 7.20737 6.75707 7.32558 6.57308 7.40756C6.38908 7.48955 6.19045 7.53363 5.98905 7.53718C5.78764 7.54074 5.58758 7.50369 5.4008 7.42825C5.21403 7.3528 5.04436 7.24051 4.90192 7.09808C4.75949 6.95564 4.6472 6.78597 4.57175 6.59919C4.49631 6.41242 4.45926 6.21236 4.46282 6.01095C4.46637 5.80955 4.51045 5.61092 4.59244 5.42692C4.67442 5.24293 4.79263 5.07732 4.94 4.94M0.5 0.5L11.5 11.5M8.97 8.97C8.1153 9.6215 7.07455 9.98243 6 10C2.5 10 0.5 6 0.5 6C1.12194 4.84095 1.98457 3.8283 3.03 3.03L8.97 8.97Z"
          stroke="#F1F5F9"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_4392_11561">
          <rect width="12" height="12" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}
function EyeOn({ className, color }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g opacity="0.5" clipPath="url(#clip0_4392_14096)">
        <path
          d="M0.5 6C0.5 6 2.5 2 6 2C9.5 2 11.5 6 11.5 6C11.5 6 9.5 10 6 10C2.5 10 0.5 6 0.5 6Z"
          stroke="#F1F5F9"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6 7.5C6.82843 7.5 7.5 6.82843 7.5 6C7.5 5.17157 6.82843 4.5 6 4.5C5.17157 4.5 4.5 5.17157 4.5 6C4.5 6.82843 5.17157 7.5 6 7.5Z"
          stroke="#F1F5F9"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_4392_14096">
          <rect width="12" height="12" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}
function Search({ className, color }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      fill="none"
      viewBox="0 0 18 18">
      <g
        className={className}
        stroke="#F8FAFC"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        opacity="0.7">
        <path d="M9 2.625a5.667 5.667 0 100 11.333A5.667 5.667 0 009 2.625v0zM16.084 15.375l-3.082-3.081"></path>
      </g>
    </svg>
  )
}

function ChevronDown({ className, color }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 16 16">
      <path
        className={className}
        stroke={color || '#F8FAFC'}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M4 6l4 4 4-4"
        opacity="0.55"></path>
    </svg>
  )
}

function Lightning({ className, color }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      fill="none"
      viewBox="0 0 18 18">
      <path
        stroke="#F8FAFC"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M9.833 1.5L1.5 10.667H9L8.167 16.5 16.5 7.333H9L9.833 1.5z"></path>
    </svg>
  )
}
function PassiveIncomeIcon({ className, color }) {
  return (
    <svg
      className={className}
      width={16}
      height={17}
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g opacity="0.8">
        <path
          d="M8 15.7379V13.1706"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3.05988 7.52472H3.7656C4.88863 7.52472 5.96566 7.97084 6.75976 8.76494C7.55386 9.55904 7.99998 10.6361 7.99998 11.7591V13.1706H7.29425C6.17122 13.1706 5.09419 12.7244 4.3001 11.9303C3.506 11.1362 3.05988 10.0592 3.05988 8.93618V7.52472Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.70569 13.1706H7.99996V11.7591C7.99996 10.6361 8.44608 9.55905 9.24018 8.76495C10.0343 7.97085 11.1113 7.52473 12.2343 7.52473H12.9401V8.93619C12.9401 10.0592 12.4939 11.1362 11.6998 11.9303C10.9057 12.7244 9.82871 13.1706 8.70569 13.1706V13.1706Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <path
        d="M6.38159 3.99608C6.41759 3.375 6.57963 2.76775 6.85785 2.2113C7.13607 1.65486 7.52465 1.16087 7.99992 0.75943C8.47519 1.16087 8.86377 1.65486 9.14199 2.2113C9.42021 2.76775 9.58225 3.375 9.61825 3.99608C9.58225 4.61716 9.42021 5.22442 9.14199 5.78086C8.86377 6.33731 8.47519 6.83129 7.99992 7.23274C7.52465 6.83129 7.13607 6.33731 6.85785 5.78086C6.57963 5.22442 6.41759 4.61716 6.38159 3.99608V3.99608Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function WalletIcon({ className, color }) {
  return (
    <svg
      className={className}
      width={16}
      height={17}
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7.50784 11.1637C9.11705 11.1637 10.4216 9.85918 10.4216 8.24997C10.4216 6.64076 9.11705 5.33624 7.50784 5.33624C5.89864 5.33624 4.59412 6.64076 4.59412 8.24997C4.59412 9.85918 5.89864 11.1637 7.50784 11.1637Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.50785 14.7498C3.91808 14.7498 1.008 11.8398 1.008 8.24997C1.008 4.66021 3.91808 1.75012 7.50785 1.75012C13.6155 1.75012 14.0077 5.67245 14.0077 8.24997V9.37064C14.0077 10.3609 13.2049 11.1637 12.2146 11.1637C11.2243 11.1637 10.4216 10.3609 10.4216 9.37064V5.33625"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function MoneyVault({ className, color }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="20"
      fill="none"
      viewBox="0 0 21 20">
      <path
        className={className}
        stroke="#64748B"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M17.826 1.25H3.508a1.59 1.59 0 00-1.591 1.59v12.728c0 .879.712 1.591 1.59 1.591h14.319a1.59 1.59 0 001.59-1.59V2.84a1.59 1.59 0 00-1.59-1.591zM9.543 8.08l-2.25-2.25M14.042 12.58l-2.25-2.25M11.791 8.08l2.25-2.25M7.292 12.58l2.25-2.25"></path>
      <path
        className={className}
        stroke="#64748B"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M10.667 13.977a4.773 4.773 0 100-9.545 4.773 4.773 0 000 9.545z"></path>
      <path
        className={className}
        stroke="#64748B"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M10.666 10.796a1.59 1.59 0 100-3.182 1.59 1.59 0 000 3.182zM5.099 17.16v1.59M16.235 17.16v1.59"></path>
    </svg>
  )
}

function MoneyPool({ className, color }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="20"
      fill="none"
      viewBox="0 0 21 20">
      <path
        className={className}
        stroke="#64748B"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M2.333 7.361h15.834M15.528 7.361l2.382 5.32c.963 2.527-.903 5.236-3.609 5.236H6.2c-2.706 0-4.572-2.709-3.61-5.237l2.383-5.319M7.083 5.25a1.583 1.583 0 100-3.167 1.583 1.583 0 000 3.167zM13.417 5.25a1.583 1.583 0 100-3.167 1.583 1.583 0 000 3.167z"></path>
    </svg>
  )
}

function MoneyReward({ className, color }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="20"
      fill="none"
      viewBox="0 0 21 20">
      <rect width="20" height="20" x="0.667" fill="#22C55E" rx="10"></rect>
      <path
        fill="#DCFCE7"
        d="M10.667 4.5l1.623 3.292 3.627.527-2.625 2.563.62 3.618-3.245-1.71-3.245 1.71.62-3.618-2.625-2.563 3.627-.527L10.667 4.5z"></path>
    </svg>
  )
}

function MyNFTs({ color, className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="20"
      fill="none"
      viewBox="0 0 21 20">
      <path
        className={className}
        stroke="#64748B"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M18.5 4.697H1.833v13.636H18.5V4.697zM5.621 1.667h9.091"></path>
      <path
        className={className}
        stroke="#64748B"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M5.621 15.303l6.818-6.06 3.03 6.06H5.622zM6.379 10a1.515 1.515 0 100-3.03 1.515 1.515 0 000 3.03z"></path>
    </svg>
  )
}
function SystemTheme({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 16 16">
      <path
        className={className}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.25}
        d="M8 14v-1.619M4.357 14h7.286M14.071 2.667H1.928v8.095h12.143V2.667z"></path>
    </svg>
  )
}

function MoneyReceipt({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="20"
      fill="none"
      viewBox="0 0 21 20">
      <path
        className={className}
        stroke="#64748B"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M3 .833h15v17.5l-2.5-1.666-2.5 1.666-2.5-1.666L8 18.333l-2.5-1.666L3 18.333V.833zM6.333 5.833H10.5M13.833 5.833h.834M6.333 9.167H10.5M13.833 9.167h.834M6.333 12.5H10.5M13.833 12.5h.834"></path>
    </svg>
  )
}

function ArrowUpAlt({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="20"
      fill="none"
      viewBox="0 0 21 20">
      <path
        className={className}
        stroke="#64748B"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M10.5 15.833V4.167M4.667 10L10.5 4.167 16.333 10"></path>
    </svg>
  )
}

function Farming({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="20"
      fill="none"
      viewBox="0 0 21 20">
      <path
        className={className}
        stroke="#64748B"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M10.5 19.167v-3.334M4.667 9.167H5.5a5 5 0 015 5v1.666h-.833a5 5 0 01-5-5V9.167zM11.333 15.833H10.5v-1.666a5 5 0 015-5h.833v1.666a5 5 0 01-5 5v0zM8.833 5A4.72 4.72 0 0110.5 1.667 4.72 4.72 0 0112.167 5 4.72 4.72 0 0110.5 8.333 4.721 4.721 0 018.833 5v0z"></path>
    </svg>
  )
}

function MoneySend({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="20"
      fill="none"
      viewBox="0 0 21 20">
      <path
        className={className}
        stroke="#64748B"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M7.47 12.273H2.167V4.697h16.666v8.333"></path>
      <path
        className={className}
        stroke="#64748B"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M5.197 12.273v.378a5.682 5.682 0 0011.364 0V6.97A3.03 3.03 0 0013.53 10v1.515a3.03 3.03 0 00-3.031 3.03M10.5 9.242a.758.758 0 100-1.515.758.758 0 000 1.515z"></path>
      <path
        className={className}
        stroke="#64748B"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M10.5 9.242a.758.758 0 100-1.515.758.758 0 000 1.515zM15.803 4.697v-.758a2.273 2.273 0 00-2.273-2.272H7.47a2.273 2.273 0 00-2.273 2.272v.758"></path>
    </svg>
  )
}

function Selling({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      fill="none"
      viewBox="0 0 18 18">
      <path
        className={className}
        stroke="#64748B"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M5.25 5.25h.008m11.317 5.342L10.6 16.567a1.666 1.666 0 01-2.358 0l-7.159-7.15V1.083h8.334l7.158 7.159a1.667 1.667 0 010 2.35z"></path>
    </svg>
  )
}

function Gavel({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      fill="none"
      viewBox="0 0 12 12">
      <g
        className={className}
        stroke="#64748B"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        opacity="0.8">
        <path d="M6.577 4.918l4.082 4.101a1.156 1.156 0 010 1.641 1.167 1.167 0 01-1.646 0L4.918 6.577M2.706 4.365l2.212 2.212m1.659-1.66l-2.212-2.21M1.047 11h3.87"></path>
        <path d="M3.145 8.12L1.162 6.139a.553.553 0 010-.782L2.43 4.088l.276.277 1.659-1.659-.277-.276 1.268-1.268a.553.553 0 01.782 0l1.983 1.983a.553.553 0 010 .781L6.853 5.194l-.276-.276-1.66 1.659.277.276-1.268 1.268a.553.553 0 01-.781 0v0z"></path>
      </g>
    </svg>
  )
}
function Memo({ className }) {
  return (
    <svg
      width={16}
      height={17}
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        className={className}
        d="M9.33329 1.83331H3.99996C3.64634 1.83331 3.3072 1.97379 3.05715 2.22384C2.8071 2.47389 2.66663 2.81302 2.66663 3.16665V13.8333C2.66663 14.1869 2.8071 14.5261 3.05715 14.7761C3.3072 15.0262 3.64634 15.1666 3.99996 15.1666H12C12.3536 15.1666 12.6927 15.0262 12.9428 14.7761C13.1928 14.5261 13.3333 14.1869 13.3333 13.8333V5.83331M9.33329 1.83331L13.3333 5.83331M9.33329 1.83331V5.83331H13.3333M10.6666 9.16665H5.33329M10.6666 11.8333H5.33329M6.66663 6.49998H5.33329"
        stroke="#94A3B8"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
function Verified({ className }) {
  return (
    <svg
      width={15}
      height={15}
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        className={className}
        d="M9.54247 1.03918L9.94674 1.59422L10.6239 1.48725C11.0174 1.42531 11.42 1.45728 11.7987 1.58056C12.1775 1.70383 12.5218 1.91491 12.8035 2.19658C13.0851 2.47825 13.2962 2.82252 13.4195 3.20131C13.5428 3.58009 13.5747 3.98265 13.5128 4.37615L13.4058 5.05331L13.9609 5.45759C14.2828 5.69205 14.5447 5.99928 14.7253 6.35422C14.9059 6.70917 15.0001 7.10178 15.0001 7.50003C15.0001 7.89827 14.9059 8.29088 14.7253 8.64583C14.5447 9.00078 14.2828 9.30801 13.9609 9.54247L13.4058 9.94674L13.5128 10.6239C13.5747 11.0174 13.5428 11.42 13.4195 11.7987C13.2962 12.1775 13.0851 12.5218 12.8035 12.8035C12.5218 13.0851 12.1775 13.2962 11.7987 13.4195C11.42 13.5428 11.0174 13.5747 10.6239 13.5128L9.94674 13.4058L9.54247 13.9609C9.30801 14.2828 9.00078 14.5447 8.64583 14.7253C8.29088 14.9059 7.89827 15.0001 7.50003 15.0001C7.10178 15.0001 6.70917 14.9059 6.35422 14.7253C5.99928 14.5447 5.69205 14.2828 5.45759 13.9609L5.05331 13.4058L4.37615 13.5128C3.98265 13.5747 3.58009 13.5428 3.20131 13.4195C2.82252 13.2962 2.47825 13.0851 2.19658 12.8035C1.91491 12.5218 1.70383 12.1775 1.58056 11.7987C1.45728 11.42 1.42531 11.0174 1.48725 10.6239L1.59422 9.94674L1.03918 9.54247C0.717263 9.30801 0.455325 9.00078 0.274731 8.64583C0.0941363 8.29088 0 7.89827 0 7.50003C0 7.10178 0.0941363 6.70917 0.274731 6.35422C0.455325 5.99928 0.717263 5.69205 1.03918 5.45759L1.59422 5.05331L1.48725 4.37615C1.42531 3.98265 1.45728 3.58009 1.58056 3.20131C1.70383 2.82252 1.91491 2.47825 2.19658 2.19658C2.47825 1.91491 2.82252 1.70383 3.20131 1.58056C3.58009 1.45728 3.98265 1.42531 4.37615 1.48725L5.05331 1.59422L5.45759 1.03918C5.69205 0.717263 5.99928 0.455325 6.35422 0.274731C6.70917 0.0941363 7.10178 0 7.50003 0C7.89827 0 8.29088 0.0941363 8.64583 0.274731C9.00078 0.455325 9.30801 0.717263 9.54247 1.03918Z"
        fill="#3B82F6"
      />
      <path
        d="M4.55225 7.4539L6.65785 9.5595L10.4479 5.76941"
        stroke="#EFF6FF"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Bookmark({ className }) {
  return (
    <svg
      width={12}
      height={16}
      viewBox="0 0 12 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        className={className}
        d="M11.25 14.75L6 11L0.75 14.75V2.75C0.75 2.35218 0.908035 1.97064 1.18934 1.68934C1.47064 1.40804 1.85218 1.25 2.25 1.25H9.75C10.1478 1.25 10.5294 1.40804 10.8107 1.68934C11.092 1.97064 11.25 2.35218 11.25 2.75V14.75Z"
        stroke="#F8FAFC"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Globe({ className }) {
  return (
    <svg
      width={18}
      height={18}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        className={className}
        d="M16.5 9C16.5 13.1421 13.1421 16.5 9 16.5M16.5 9C16.5 4.85786 13.1421 1.5 9 1.5M16.5 9H1.5M9 16.5C4.85786 16.5 1.5 13.1421 1.5 9M9 16.5C10.876 14.4462 11.9421 11.781 12 9C11.9421 6.21903 10.876 3.55376 9 1.5M9 16.5C7.12404 14.4462 6.05794 11.781 6 9C6.05794 6.21903 7.12404 3.55376 9 1.5M1.5 9C1.5 4.85786 4.85786 1.5 9 1.5"
        stroke="#94A3B8"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Twitter({ className }) {
  return (
    <svg
      width={18}
      height={18}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        className={className}
        d="M17.25 2.24997C16.5318 2.75658 15.7366 3.14406 14.895 3.39747C14.4433 2.87811 13.843 2.50999 13.1753 2.34292C12.5076 2.17584 11.8046 2.21787 11.1616 2.46331C10.5185 2.70876 9.96633 3.14577 9.57974 3.71526C9.19314 4.28475 8.99077 4.95923 9 5.64747V6.39747C7.68198 6.43165 6.37596 6.13933 5.19826 5.54656C4.02056 4.95378 3.00774 4.07895 2.25 2.99997C2.25 2.99997 -0.75 9.74997 6 12.75C4.4554 13.7984 2.61537 14.3242 0.75 14.25C7.5 18 15.75 14.25 15.75 5.62497C15.7493 5.41606 15.7292 5.20767 15.69 5.00247C16.4555 4.24759 16.9956 3.29451 17.25 2.24997Z"
        stroke="#94A3B8"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Discord({ className }) {
  return (
    <svg
      width={22}
      height={15}
      viewBox="0 0 22 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        className={className}
        d="M17.7684 2.31781L18.3561 1.85188C18.2742 1.74861 18.1666 1.66874 18.044 1.6203L17.7684 2.31781ZM13.7454 1.25L13.8539 0.507899C13.565 0.465635 13.2779 0.594869 13.1179 0.839129L13.7454 1.25ZM20.6671 11.8631L21.0676 12.4972C21.2603 12.3755 21.3872 12.1729 21.4125 11.9464L20.6671 11.8631ZM15.73 14L15.1624 14.4902C15.3495 14.7069 15.6438 14.7982 15.9207 14.7253L15.73 14ZM14.6733 12.53L14.4441 11.8159C14.2268 11.8856 14.0532 12.0504 13.9722 12.2636C13.8912 12.4769 13.9116 12.7154 14.0277 12.9118L14.6733 12.53ZM16.3404 11.8446L16.6807 12.513C16.9209 12.3907 17.0771 12.1488 17.0896 11.8795C17.1022 11.6102 16.9692 11.3549 16.7414 11.2108L16.3404 11.8446ZM15.9325 11.572L16.3642 10.9587C16.1568 10.8127 15.8896 10.7814 15.654 10.8756L15.9325 11.572ZM6.06746 11.572L6.34303 10.8745C6.10674 10.7811 5.83926 10.8137 5.63233 10.9611L6.06746 11.572ZM5.6595 11.8446L5.26165 11.2088C5.03246 11.3522 4.89821 11.6079 4.91024 11.878C4.92228 12.1481 5.07874 12.3908 5.31977 12.5132L5.6595 11.8446ZM7.32358 12.5287L7.96955 12.9097C8.08539 12.7134 8.10563 12.475 8.02454 12.2619C7.94346 12.0488 7.76986 11.8842 7.55278 11.8145L7.32358 12.5287ZM6.26684 13.9987L6.07597 14.724C6.35346 14.797 6.64829 14.7053 6.83542 14.4878L6.26684 13.9987ZM1.33281 11.8631L0.587342 11.9454C0.612415 12.1724 0.739534 12.3756 0.93268 12.4974L1.33281 11.8631ZM4.22391 2.32045L3.94763 1.62319C3.82397 1.67219 3.71556 1.7532 3.63352 1.85791L4.22391 2.32045ZM8.24998 1.25L8.87574 0.836567C8.71543 0.593923 8.42929 0.465829 8.14153 0.507883L8.24998 1.25ZM8.77144 2.15373L8.09872 2.48531C8.24052 2.77301 8.54959 2.9387 8.86769 2.89753L8.77144 2.15373ZM13.23 2.15373L13.1355 2.89776C13.453 2.93809 13.7612 2.77246 13.9027 2.48536L13.23 2.15373ZM9.51378 7.81071L8.7639 7.79705C8.76381 7.80201 8.76377 7.80698 8.76378 7.81194L9.51378 7.81071ZM15.9923 7.81071L15.2423 7.79705V7.81071H15.9923ZM18.044 1.6203C16.7274 1.09998 15.3216 0.722613 13.8539 0.507899L13.6368 1.9921C14.9912 2.19025 16.2848 2.53796 17.4927 3.01532L18.044 1.6203ZM21.4125 11.9464C21.8424 8.10153 20.6683 4.76851 18.3561 1.85188L17.1806 2.78374C19.2825 5.43496 20.3017 8.38169 19.9218 11.7798L21.4125 11.9464ZM15.9207 14.7253C17.5956 14.285 19.3061 13.6097 21.0676 12.4972L20.2666 11.229C18.6509 12.2494 17.0853 12.8682 15.5393 13.2747L15.9207 14.7253ZM14.0277 12.9118C14.3555 13.4659 14.7343 13.9945 15.1624 14.4902L16.2977 13.5098C15.9282 13.082 15.6015 12.6261 15.3188 12.1482L14.0277 12.9118ZM16.0002 11.1762C15.5087 11.4264 14.9876 11.6414 14.4441 11.8159L14.9025 13.2441C15.5216 13.0454 16.117 12.7999 16.6807 12.513L16.0002 11.1762ZM15.5007 12.1852C15.6439 12.2861 15.7906 12.3842 15.9394 12.4784L16.7414 11.2108C16.6142 11.1303 16.4879 11.0458 16.3642 10.9587L15.5007 12.1852ZM5.79189 12.2695C9.17644 13.6067 12.8609 13.6079 16.2109 12.2684L15.654 10.8756C12.6636 12.0713 9.37563 12.0725 6.34303 10.8745L5.79189 12.2695ZM6.05735 12.4804C6.20967 12.385 6.35861 12.2854 6.50259 12.1829L5.63233 10.9611C5.51253 11.0465 5.38844 11.1295 5.26165 11.2088L6.05735 12.4804ZM7.55278 11.8145C7.0097 11.6402 6.4899 11.4252 5.99922 11.1759L5.31977 12.5132C5.88121 12.7985 6.4749 13.0439 7.09438 13.2428L7.55278 11.8145ZM6.83542 14.4878C7.26025 13.9939 7.64076 13.4671 7.96955 12.9097L6.67761 12.1476C6.39599 12.625 6.06792 13.0799 5.69827 13.5096L6.83542 14.4878ZM0.93268 12.4974C2.69386 13.6083 4.40261 14.2836 6.07597 14.724L6.45772 13.2734C4.9133 12.8669 3.34905 12.2481 1.73293 11.2287L0.93268 12.4974ZM3.63352 1.85791C0.964802 5.26423 0.221035 8.62941 0.587342 11.9454L2.07827 11.7807C1.7544 8.84882 2.39099 5.87606 4.81429 2.78299L3.63352 1.85791ZM8.14153 0.507883C6.67198 0.722641 5.2644 1.10145 3.94763 1.62319L4.50018 3.01771C5.70796 2.53915 7.00283 2.19022 8.35843 1.99212L8.14153 0.507883ZM9.44417 1.82216C9.2892 1.50776 9.06599 1.12452 8.87574 0.836567L7.62422 1.66343C7.78366 1.90475 7.97456 2.23341 8.09872 2.48531L9.44417 1.82216ZM13.3245 1.40971C11.7624 1.21128 10.2121 1.21105 8.67519 1.40994L8.86769 2.89753C10.2756 2.71534 11.6977 2.71512 13.1355 2.89776L13.3245 1.40971ZM13.1179 0.839129C12.9274 1.13003 12.7099 1.51251 12.5573 1.82211L13.9027 2.48536C14.0293 2.22865 14.2167 1.89925 14.3728 1.66087L13.1179 0.839129ZM5.25764 7.81071C5.25764 9.17762 6.41168 10.2451 7.76071 10.2451V8.7451C7.18338 8.7451 6.75764 8.29358 6.75764 7.81071H5.25764ZM7.76071 5.375C6.38926 5.375 5.25764 6.44916 5.25764 7.81071H6.75764C6.75764 7.32247 7.17207 6.875 7.76071 6.875V5.375ZM10.2637 7.82436C10.2889 6.43828 9.11881 5.375 7.76071 5.375V6.875C8.36276 6.875 8.7724 7.33068 8.7639 7.79705L10.2637 7.82436ZM7.76071 10.2451C9.13027 10.2451 10.266 9.17382 10.2638 7.80947L8.76378 7.81194C8.76458 8.29737 8.3513 8.7451 7.76071 8.7451V10.2451ZM11.7362 7.81071C11.7362 9.17762 12.8902 10.2451 14.2392 10.2451V8.7451C13.6619 8.7451 13.2362 8.29358 13.2362 7.81071H11.7362ZM14.2392 5.375C12.8677 5.375 11.7362 6.44916 11.7362 7.81071H13.2362C13.2362 7.32247 13.6506 6.875 14.2392 6.875V5.375ZM16.7422 7.82436C16.7674 6.43828 15.5973 5.375 14.2392 5.375V6.875C14.8413 6.875 15.2509 7.33069 15.2424 7.79705L16.7422 7.82436ZM14.2392 10.2451C15.6099 10.2451 16.7423 9.173 16.7423 7.81071H15.2423C15.2423 8.29819 14.8286 8.7451 14.2392 8.7451V10.2451Z"
        fill="#94A3B8"
      />
    </svg>
  )
}

function Telegram({ className }) {
  return (
    <svg
      width={18}
      height={18}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        className={className}
        d="M11.75 7.03516L8.08333 10.7852L13.5833 16.4102L17.25 1.41016L0.75 7.97266L4.41667 9.84766L6.25 15.4727L9 11.7227"
        stroke="#94A3B8"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Journal({ className }) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        className={className}
        d="M1.33337 1.33325L11 3.66659L12 8.66659L8.66671 11.9999L3.66671 10.9999L1.33337 1.33325ZM1.33337 1.33325L6.39071 6.39059M8.00004 12.6666L12.6667 7.99992L14.6667 9.99992L10 14.6666L8.00004 12.6666ZM8.66671 7.33325C8.66671 8.06963 8.06975 8.66659 7.33337 8.66659C6.59699 8.66659 6.00004 8.06963 6.00004 7.33325C6.00004 6.59687 6.59699 5.99992 7.33337 5.99992C8.06975 5.99992 8.66671 6.59687 8.66671 7.33325Z"
        stroke="#A24B63"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Padlock({ className }) {
  return (
    <svg
      width={16}
      height={18}
      viewBox="0 0 16 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        className={className}
        d="M4.25 8.24999V5.24999C4.24907 4.32003 4.59371 3.42289 5.21703 2.73274C5.84035 2.04259 6.69787 1.60867 7.62313 1.51521C8.54838 1.42175 9.47536 1.67542 10.2241 2.22698C10.9728 2.77854 11.4899 3.58863 11.675 4.49999M2.75 8.24999H13.25C14.0784 8.24999 14.75 8.92157 14.75 9.74999V15C14.75 15.8284 14.0784 16.5 13.25 16.5H2.75C1.92157 16.5 1.25 15.8284 1.25 15V9.74999C1.25 8.92157 1.92157 8.24999 2.75 8.24999Z"
        stroke="#94A3B8"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Star({ className }) {
  return (
    <svg
      width={18}
      height={17}
      viewBox="0 0 18 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        className={className}
        d="M9 1.5L11.3175 6.195L16.5 6.9525L12.75 10.605L13.635 15.765L9 13.3275L4.365 15.765L5.25 10.605L1.5 6.9525L6.6825 6.195L9 1.5Z"
        stroke="#94A3B8"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Whitelist({ className }) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        className={className}
        d="M11.375 2.9375H13.9062C14.13 2.9375 14.3446 3.02639 14.5029 3.18463C14.6611 3.34286 14.75 3.55747 14.75 3.78125V13.0625C14.75 13.5101 14.5722 13.9393 14.2557 14.2557C13.9393 14.5722 13.5101 14.75 13.0625 14.75C12.6149 14.75 12.1857 14.5722 11.8693 14.2557C11.5528 13.9393 11.375 13.5101 11.375 13.0625V2.09375C11.375 1.86997 11.2861 1.65536 11.1279 1.49713C10.9696 1.33889 10.755 1.25 10.5312 1.25H2.09375C1.86997 1.25 1.65536 1.33889 1.49713 1.49713C1.33889 1.65536 1.25 1.86997 1.25 2.09375V12.2188C1.25 12.8901 1.51668 13.5339 1.99139 14.0086C2.46609 14.4833 3.10992 14.75 3.78125 14.75H13.0625"
        stroke="#94A3B8"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className={className}
        d="M4.625 4.625H8"
        stroke="#94A3B8"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className={className}
        d="M4.625 8H8"
        stroke="#94A3B8"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className={className}
        d="M4.625 11.375H8"
        stroke="#94A3B8"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Themes({ className }) {
  return (
    <svg
      width={18}
      height={18}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        className={className}
        d="M0.75 8.24996C0.75 5.47496 2.1 2.99996 4.275 1.49996C5.025 0.974962 6.3 0.824962 6.75 1.49996C7.5 2.39996 6.15 3.74996 6.75 4.49996C8.25 6.29996 11.325 2.77496 15 4.49996C17.625 5.84996 17.25 9.22496 16.95 10.5C15.975 13.95 12.75 16.5 9 16.5C4.425 16.5 0.75 12.825 0.75 8.24996Z"
        stroke="#94A3B8"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className={className}
        d="M12.75 9.75C13.5784 9.75 14.25 9.07843 14.25 8.25C14.25 7.42157 13.5784 6.75 12.75 6.75C11.9216 6.75 11.25 7.42157 11.25 8.25C11.25 9.07843 11.9216 9.75 12.75 9.75Z"
        stroke="#94A3B8"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className={className}
        d="M3.75 9C4.16421 9 4.5 8.66421 4.5 8.25C4.5 7.83579 4.16421 7.5 3.75 7.5C3.33579 7.5 3 7.83579 3 8.25C3 8.66421 3.33579 9 3.75 9Z"
        stroke="#94A3B8"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className={className}
        d="M5.625 12.75C6.03921 12.75 6.375 12.4142 6.375 12C6.375 11.5858 6.03921 11.25 5.625 11.25C5.21079 11.25 4.875 11.5858 4.875 12C4.875 12.4142 5.21079 12.75 5.625 12.75Z"
        stroke="#94A3B8"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className={className}
        d="M9.75 14.25C10.1642 14.25 10.5 13.9142 10.5 13.5C10.5 13.0858 10.1642 12.75 9.75 12.75C9.33579 12.75 9 13.0858 9 13.5C9 13.9142 9.33579 14.25 9.75 14.25Z"
        stroke="#94A3B8"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Airdrops({ className }) {
  return (
    <svg
      width={16}
      height={18}
      viewBox="0 0 16 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        className={className}
        d="M6.5 14.25H9.5V16.5C9.5 16.6989 9.42098 16.8897 9.28033 17.0303C9.13968 17.171 8.94891 17.25 8.75 17.25H7.25C7.05109 17.25 6.86032 17.171 6.71967 17.0303C6.57902 16.8897 6.5 16.6989 6.5 16.5V14.25Z"
        stroke="#94A3B8"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className={className}
        d="M8.00002 6.76501L7.99927 12"
        stroke="#94A3B8"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className={className}
        d="M11 12L14.75 7.5C14.75 5.70979 14.0388 3.9929 12.773 2.72703C11.5071 1.46116 9.79021 0.75 8 0.75C6.20979 0.75 4.4929 1.46116 3.22703 2.72703C1.96116 3.9929 1.25 5.70979 1.25 7.5L5 12"
        stroke="#94A3B8"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className={className}
        d="M14.75 7.50003C14.695 7.05477 14.4681 6.64865 14.1178 6.36839C13.7675 6.08813 13.3215 5.95593 12.875 6.00003C12.563 5.99051 12.2531 6.05484 11.9707 6.18778C11.6883 6.32072 11.4412 6.51851 11.2498 6.76503C11.0585 6.51848 10.8116 6.32066 10.5292 6.18771C10.2469 6.05476 9.93716 5.99045 9.62525 6.00003C9.31324 5.99051 9.00339 6.05484 8.72096 6.18778C8.43853 6.32072 8.1915 6.51851 8 6.76503C7.8085 6.51851 7.56147 6.32072 7.27904 6.18778C6.99661 6.05484 6.68676 5.99051 6.37475 6.00003C6.06284 5.99045 5.75308 6.05476 5.47076 6.18771C5.18843 6.32066 4.94155 6.51848 4.75025 6.76503C4.55875 6.51851 4.31172 6.32072 4.02929 6.18778C3.74686 6.05484 3.43701 5.99051 3.125 6.00003C2.67853 5.95593 2.23252 6.08813 1.88219 6.36839C1.53186 6.64865 1.30498 7.05477 1.25 7.50003"
        stroke="#94A3B8"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Console({ className }) {
  return (
    <svg
      width={18}
      height={16}
      viewBox="0 0 18 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        className={className}
        d="M16.5 1.18182H1.5V14.8182H16.5V1.18182Z"
        stroke="#94A3B8"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className={className}
        d="M1.5 3.90912H16.5"
        stroke="#94A3B8"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className={className}
        d="M4.22728 7.31818L5.59092 8.68181L4.22728 10.0454"
        stroke="#94A3B8"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className={className}
        d="M7.63637 10.0455H10.3636"
        stroke="#94A3B8"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className={className}
        d="M4.90909 1.18182V3.9091"
        stroke="#94A3B8"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Alpha({ className }) {
  return (
    <svg
      className="-mt-px"
      width={18}
      height={18}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        className={className}
        d="M15.1866 13L13.4501 9.382L17.25 4.581L15.5527 3.419L12.3818 7.424C11.2959 5.649 9.24491 3 6.42358 3C3.29187 3 0.75 5.687 0.75 9C0.75 12.313 3.29187 15 6.42358 15C8.88812 15 10.8175 12.977 11.992 11.278L13.3202 13.964C13.514 14.332 14.1998 15 15.1866 15C16.4395 15 17.249 14.053 17.249 13C17.249 12.869 15.3959 13 15.1866 13ZM6.48855 13C4.60767 13 2.83609 11.209 2.83609 9C2.83609 6.791 4.60767 5 6.48855 5C9.05414 5 10.8577 9 10.8577 9C10.8577 9 9.08714 13 6.48855 13Z"
        fill="#94A3B8"
      />
    </svg>
  )
}

function PaintRoller({ className }) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        className={className}
        d="M10.625 1.25H3.125C2.29657 1.25 1.625 1.92157 1.625 2.75V4.25C1.625 5.07843 2.29657 5.75 3.125 5.75H10.625C11.4534 5.75 12.125 5.07843 12.125 4.25V2.75C12.125 1.92157 11.4534 1.25 10.625 1.25Z"
        stroke="#94A3B8"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className={className}
        d="M12.125 3.5H12.875C13.2728 3.5 13.6544 3.65804 13.9357 3.93934C14.217 4.22064 14.375 4.60218 14.375 5C14.375 5.99456 13.9799 6.94839 13.2767 7.65165C12.5734 8.35491 11.6196 8.75 10.625 8.75H6.875V10.25"
        stroke="#94A3B8"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className={className}
        d="M7.625 10.25H6.125C5.71079 10.25 5.375 10.5858 5.375 11V14C5.375 14.4142 5.71079 14.75 6.125 14.75H7.625C8.03921 14.75 8.375 14.4142 8.375 14V11C8.375 10.5858 8.03921 10.25 7.625 10.25Z"
        stroke="#94A3B8"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ArrowRight({ className }) {
  return (
    <svg
      width={12}
      height={12}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g opacity="0.5">
        <path
          className={className}
          d="M2.5 6H9.5"
          stroke="#64748B"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          className={className}
          d="M6 2.5L9.5 6L6 9.5"
          stroke="#64748B"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  )
}

function Share({ className }) {
  return (
    <svg
      width={18}
      height={18}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        className={className}
        d="M3 9V15C3 15.3978 3.15804 15.7794 3.43934 16.0607C3.72064 16.342 4.10218 16.5 4.5 16.5H13.5C13.8978 16.5 14.2794 16.342 14.5607 16.0607C14.842 15.7794 15 15.3978 15 15V9M12 4.5L9 1.5M9 1.5L6 4.5M9 1.5V11.25"
        stroke="#F8FAFC"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function CheckComplete({ className }) {
  return (
    <svg
      width={22}
      height={22}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        className={className}
        d="M18.3333 5.5L8.24996 15.5833L3.66663 11"
        stroke="#166534"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Play({ className }) {
  return (
    <svg
      className={className}
      width={14}
      height={16}
      viewBox="0 0 14 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        className={className}
        d="M1.125 2.42459C1.125 1.25319 2.40765 0.533839 3.40718 1.14466L12.5306 6.72008C13.4877 7.30497 13.4877 8.69503 12.5306 9.27992L3.40718 14.8553C2.40765 15.4662 1.125 14.7468 1.125 13.5754V2.42459Z"
        stroke="#94A3B8"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Dashboard({ className }) {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        className={className}
        d="M8.63636 2.5H2.5V8.63636H8.63636V2.5Z"
        stroke="#F8FAFC"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className={className}
        d="M11.3636 8.63635L17.5 8.63635L17.5 2.49999L11.3636 2.49999L11.3636 8.63635Z"
        stroke="#F8FAFC"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className={className}
        d="M8.63636 11.3636H2.5V17.5H8.63636V11.3636Z"
        stroke="#F8FAFC"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className={className}
        d="M11.3636 17.5L17.5 17.5L17.5 11.3636L11.3636 11.3636L11.3636 17.5Z"
        stroke="#F8FAFC"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Feed({ className }) {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g opacity="1">
        <path
          d="M13.75 4.375H16.5625C16.8111 4.375 17.0496 4.47377 17.2254 4.64959C17.4012 4.8254 17.5 5.06386 17.5 5.3125V15.625C17.5 16.1223 17.3025 16.5992 16.9508 16.9508C16.5992 17.3025 16.1223 17.5 15.625 17.5C15.1277 17.5 14.6508 17.3025 14.2992 16.9508C13.9475 16.5992 13.75 16.1223 13.75 15.625V3.4375C13.75 3.18886 13.6512 2.9504 13.4754 2.77459C13.2996 2.59877 13.0611 2.5 12.8125 2.5H3.4375C3.18886 2.5 2.9504 2.59877 2.77459 2.77459C2.59877 2.9504 2.5 3.18886 2.5 3.4375V14.6875C2.5 15.4334 2.79632 16.1488 3.32376 16.6762C3.85121 17.2037 4.56658 17.5 5.3125 17.5H15.625"
          stroke="#CBD5E1"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.25 6.25H10"
          stroke="#CBD5E1"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.25 10H10"
          stroke="#CBD5E1"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.25 13.75H10"
          stroke="#CBD5E1"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  )
}

function Notifications({ className }) {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g opacity="1">
        <path
          d="M8.14821 3.51848C8.14821 2.4907 8.97229 1.66663 10.0001 1.66663C11.0186 1.66663 11.8519 2.4907 11.8519 3.51848C14.0186 4.537 15.4353 6.67588 15.5556 9.07403V11.8518C15.6945 13.0185 16.3797 14.0463 17.4075 14.6296H2.59266H2.59173C3.61025 14.0463 4.29544 13.0185 4.44358 11.8518V9.07403H4.44266C4.55377 6.67588 5.97044 4.537 8.14636 3.51848"
          stroke="#F8FAFC"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.22227 14.6296V15.5556C7.22227 17.0833 8.46301 18.3333 10 18.3333C11.5278 18.3333 12.7778 17.0833 12.7778 15.5556V14.6296"
          stroke="#F8FAFC"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  )
}

function WalletNav({ className }) {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g opacity="1">
        <path
          d="M16.8181 10.0001V4.69714H3.18215C2.34505 4.69714 1.66704 4.01912 1.66704 3.18201V16.0607C1.66704 17.316 2.68444 18.3334 3.93971 18.3334H16.8181V13.0304"
          stroke="#CBD5E1"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.7875 2.42419V1.66663H3.18178C2.34468 1.66663 1.66667 2.34465 1.66667 3.18176C1.66667 4.01888 2.34468 4.6969 3.18178 4.6969"
          stroke="#CBD5E1"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18.3333 13.0303H14.5456C13.7085 13.0303 13.0304 12.3522 13.0304 11.5151C13.0304 10.678 13.7085 10 14.5456 10H18.3333V13.0303Z"
          stroke="#CBD5E1"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  )
}

function Activity({ className }) {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g opacity="1">
        <path
          d="M5.83333 14.1666V1.66663"
          stroke="#F8FAFC"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2.5 4.99996L5.83333 1.66663L9.16667 4.99996"
          stroke="#F8FAFC"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.1667 5V18.3333"
          stroke="#F8FAFC"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.8333 15L14.1667 18.3333L17.5 15"
          stroke="#F8FAFC"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  )
}

function Collectibles({ className }) {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g opacity="1">
        <path
          d="M18.3333 4.6969H1.66667V18.3333H18.3333V4.6969Z"
          stroke="#CBD5E1"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.45455 1.66663H14.5455"
          stroke="#CBD5E1"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.45455 15.303L12.2727 9.24243L15.303 15.303H5.45455Z"
          stroke="#CBD5E1"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.21212 9.99991C7.04892 9.99991 7.72727 9.32155 7.72727 8.48476C7.72727 7.64796 7.04892 6.9696 6.21212 6.9696C5.37533 6.9696 4.69697 7.64796 4.69697 8.48476C4.69697 9.32155 5.37533 9.99991 6.21212 9.99991Z"
          stroke="#CBD5E1"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  )
}

function Marketplace({ className }) {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g opacity="1">
        <path
          d="M13.7879 6.21204H1.66667V18.3332H13.7879V6.21204Z"
          stroke="#F8FAFC"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          opacity="0.5"
          d="M3.93944 3.93933H16.0606V16.0605"
          stroke="#F8FAFC"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          opacity="0.3"
          d="M6.2122 1.66663H18.3334V13.7878"
          stroke="#F8FAFC"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  )
}

function Protocols({ className }) {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g opacity="1">
        <path
          d="M1.66667 5.83337L10 0.833374L18.3333 5.83337L10 10.8334L1.66667 5.83337Z"
          stroke="#CBD5E1"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18.3333 10L10 15L1.66667 10"
          stroke="#CBD5E1"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18.3333 14.1667L10 19.1667L1.66667 14.1667"
          stroke="#CBD5E1"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  )
}

function Learn({ className }) {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        opacity="0.4"
        d="M19.1667 9.16669V13.3334"
        stroke="#EFF6FF"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.0001 10.8333L1.66675 6.66667L10.0001 2.5L18.3334 6.66667L10.0001 10.8333Z"
        stroke="#EFF6FF"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        opacity="0.8"
        d="M4.16675 7.91669V15C4.16675 16.3809 6.77841 17.5 10.0001 17.5C13.2217 17.5 15.8334 16.3809 15.8334 15V7.91669"
        stroke="#EFF6FF"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function MenuSend({ className }) {
  return (
    <svg
      width={18}
      height={18}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_13495_10695)">
        <path
          d="M9 15.2563L9 2.7436"
          stroke="#F8FAFC"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2.74365 9L9.00002 2.74363L15.2564 9"
          stroke="#F8FAFC"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_13495_10695">
          <rect width={18} height={18} fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

function MenuReceive({ className }) {
  return (
    <svg
      width={18}
      height={18}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_13495_10703)">
        <path
          d="M9 2.74365L9 15.2564"
          stroke="#F8FAFC"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2.74365 9L9.00002 15.2564L15.2564 9"
          stroke="#F8FAFC"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_13495_10703">
          <rect width={18} height={18} fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

function MenuSwap({ className }) {
  return (
    <svg
      className={className}
      width={18}
      height={18}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g opacity="0.6">
        <path
          d="M10.5205 4.22722L12.4092 4.22722C13.9153 4.22722 15.1364 5.44836 15.1364 6.95449V8.31813M11.7273 2.18176L9.68188 4.22722L11.7273 6.27267"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.41396 13.7727H5.59092C4.08478 13.7727 2.86365 12.5515 2.86365 11.0454V9.68176M6.27274 11.7272L8.31819 13.7727L6.27274 15.8181"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <path
        d="M4.22727 6.95455C5.7335 6.95455 6.95455 5.7335 6.95455 4.22727C6.95455 2.72104 5.7335 1.5 4.22727 1.5C2.72104 1.5 1.5 2.72104 1.5 4.22727C1.5 5.7335 2.72104 6.95455 4.22727 6.95455Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x="11.0454"
        y="11.0454"
        width="5.45455"
        height="5.45455"
        rx="2.72727"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
function MenuOTC({ className }) {
  return (
    <svg
      className={className}
      width={18}
      height={18}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g opacity="0.6">
        <path
          d="M10.5205 4.22734L12.4092 4.22734C13.9153 4.22734 15.1364 5.44848 15.1364 6.95461V8.31825M11.7273 2.18188L9.68188 4.22734L11.7273 6.27279"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.41396 13.7728H5.59092C4.08478 13.7728 2.86365 12.5517 2.86365 11.0455V9.68188M6.27274 11.7273L8.31819 13.7728L6.27274 15.8182"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <path
        d="M4.9841 4.28552L6.47881 5.4113C6.82 5.66719 7.02038 6.06795 7.02038 6.49443V7.17138H1.60474V6.49443C1.60474 6.06795 1.80512 5.66719 2.1463 5.4113L3.64102 4.28552"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.31253 4.46351C3.56449 4.46351 2.95862 3.85764 2.95862 3.1096V2.43265C2.95862 1.68461 3.56449 1.07874 4.31253 1.07874C5.06056 1.07874 5.66644 1.68461 5.66644 2.43265V3.1096C5.66644 3.85764 5.06056 4.46351 4.31253 4.46351Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.4611 14.0806L15.9559 15.2063C16.2971 15.4622 16.4974 15.863 16.4974 16.2895V16.9664H11.0818V16.2895C11.0818 15.863 11.2822 15.4622 11.6234 15.2063L13.1181 14.0806"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.7896 14.2586C13.0415 14.2586 12.4357 13.6527 12.4357 12.9046V12.2277C12.4357 11.4797 13.0415 10.8738 13.7896 10.8738C14.5376 10.8738 15.1435 11.4797 15.1435 12.2277V12.9046C15.1435 13.6527 14.5376 14.2586 13.7896 14.2586Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function MenuProfile({ className }) {
  return (
    <svg
      width={18}
      height={18}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_13495_10729)">
        <g clipPath="url(#clip1_13495_10729)">
          <path
            d="M8.99998 11.7274C7.49384 11.7274 6.27271 10.5062 6.27271 9.00009V7.63645C6.27271 6.13032 7.49384 4.90918 8.99998 4.90918C10.5061 4.90918 11.7273 6.13032 11.7273 7.63645V9.00009C11.7273 10.5062 10.5061 11.7274 8.99998 11.7274Z"
            stroke="#F8FAFC"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity="0.5"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.9327 15.9049C11.0318 16.288 10.0407 16.5 9 16.5C7.95558 16.5 6.96102 16.2865 6.05758 15.9008C6.60008 15.5679 7.2379 15.3763 7.92062 15.3763H10.0793C10.7495 15.3763 11.3874 15.5718 11.9327 15.9049ZM13.368 15.0975C12.4839 14.3476 11.3298 13.8763 10.0793 13.8763H7.92062C6.66265 13.8763 5.51162 14.3355 4.62622 15.0933C2.73294 13.7319 1.5 11.5099 1.5 9C1.5 4.85786 4.85786 1.5 9 1.5C13.1421 1.5 16.5 4.85786 16.5 9C16.5 11.5125 15.2645 13.7364 13.368 15.0975ZM14.1016 16.4154C16.4565 14.7922 18 12.0764 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 12.0781 1.54528 14.7953 3.90239 16.4182C3.94532 16.5417 4.02112 16.6556 4.12856 16.7457C4.297 16.8871 4.50934 16.9417 4.71133 16.9144C5.98627 17.6068 7.44721 18 9 18C10.5499 18 12.0083 17.6082 13.2816 16.9183C13.4877 16.9485 13.7053 16.8932 13.8764 16.7477C13.9842 16.656 14.0597 16.5405 14.1016 16.4154Z"
            fill="#F8FAFC"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_13495_10729">
          <rect width={18} height={18} fill="white" />
        </clipPath>
        <clipPath id="clip1_13495_10729">
          <rect width={18} height={18} fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

function MenuMore({ className }) {
  return (
    <svg
      width={19}
      height={18}
      viewBox="0 0 19 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <circle
        cx={9}
        cy={9}
        r="1.5"
        stroke="#F8FAFC"
        strokeWidth="1.65"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx={3}
        cy={9}
        r="1.5"
        stroke="#F8FAFC"
        strokeWidth="1.65"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="15.75"
        cy={9}
        r="1.5"
        stroke="#F8FAFC"
        strokeWidth="1.65"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function QuickActions({ className }) {
  return (
    <svg
      className={className}
      width={18}
      height={18}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M9.787 1.9165L1.91663 10.5739H8.99996L8.21292 16.0832L16.0833 7.42576H8.99996L9.787 1.9165Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function SidebarLiquid({ className }) {
  return (
    <svg
      className={className}
      width={16}
      height={17}
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_13730_9770)">
        <g opacity="0.6">
          <path
            d="M1.33331 3.40149V5.82573C1.33331 6.82997 2.96119 7.64391 4.96968 7.64391C6.97816 7.64391 8.60604 6.82997 8.60604 5.82573V3.40149"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1.33331 5.82574V8.24999C1.33331 9.25423 2.96119 10.0682 4.96968 10.0682C5.90119 10.0682 6.75028 9.89241 7.39392 9.60453"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1.33331 8.25V10.6742C1.33331 11.6785 2.96119 12.4924 4.96968 12.4924C5.90119 12.4924 6.75089 12.3173 7.39392 12.0294"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4.96968 5.21968C6.97798 5.21968 8.60604 4.40565 8.60604 3.40149C8.60604 2.39734 6.97798 1.58331 4.96968 1.58331C2.96137 1.58331 1.33331 2.39734 1.33331 3.40149C1.33331 4.40565 2.96137 5.21968 4.96968 5.21968Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <path
          d="M7.39392 8.25V10.6742C7.39392 11.6785 9.0218 12.4924 11.0303 12.4924C13.0388 12.4924 14.6666 11.6785 14.6666 10.6742V8.25"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.39392 10.6743V13.0985C7.39392 14.1027 9.0218 14.9167 11.0303 14.9167C13.0388 14.9167 14.6666 14.1027 14.6666 13.0985V10.6743"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.0303 10.0682C13.0386 10.0682 14.6666 9.25416 14.6666 8.25001C14.6666 7.24585 13.0386 6.43182 11.0303 6.43182C9.02198 6.43182 7.39392 7.24585 7.39392 8.25001C7.39392 9.25416 9.02198 10.0682 11.0303 10.0682Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_13730_9770">
          <rect
            width={16}
            height={16}
            fill="white"
            transform="translate(0 0.25)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}

function ToggleOn({ className }) {
  return (
    <svg
      width={16}
      height={8}
      viewBox="0 0 16 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <rect
        opacity="0.4"
        x="0.75"
        y="0.75"
        width="14.5"
        height="6.5"
        rx="3.25"
        stroke="#F8FAFC"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x="8.75"
        y="0.75"
        width="6.5"
        height="6.5"
        rx="3.25"
        stroke="#F8FAFC"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ToggleOff({ className }) {
  return (
    <svg
      width={16}
      height={8}
      viewBox="0 0 16 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <rect
        opacity="0.4"
        x="0.75"
        y="0.75"
        width="14.5"
        height="6.5"
        rx="3.25"
        stroke="#F8FAFC"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x="0.75"
        y="0.75"
        width="6.5"
        height="6.5"
        rx="3.25"
        stroke="#F8FAFC"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function DashboardGraph({ className }) {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g opacity="0.6">
        <path
          d="M17.1666 0.833374H2.83325C1.72868 0.833374 0.833252 1.72881 0.833252 2.83338V17.1667C0.833252 18.2713 1.72868 19.1667 2.83325 19.1667H17.1666C18.2712 19.1667 19.1666 18.2713 19.1666 17.1667V2.83337C19.1666 1.7288 18.2712 0.833374 17.1666 0.833374Z"
          stroke="#EFF6FF"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <path
        d="M4.1665 12.5L7.75791 8.19032C8.07746 7.80685 8.64508 7.74952 9.03485 8.06135L11.8591 10.3208C12.2239 10.6126 12.7497 10.5834 13.08 10.2531L15.8332 7.5"
        stroke="#EFF6FF"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function DeckCards({ className }) {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M9.78387 1.43377L2.65823 2.36976C2.11065 2.44169 1.72506 2.9439 1.79699 3.49148L3.0321 12.8943C3.10402 13.4419 3.60623 13.8274 4.15381 13.7555L11.2795 12.8195C11.827 12.7476 12.2126 12.2454 12.1407 11.6978L10.9056 2.29501C10.8337 1.74743 10.3315 1.36184 9.78387 1.43377Z"
        stroke="#EFF6FF"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g opacity="0.6">
        <path
          d="M15.1285 6.83315L18.3666 7.99033C18.8867 8.17618 19.1576 8.74842 18.9718 9.26849L15.7806 18.1995C15.5948 18.7196 15.0225 18.9906 14.5024 18.8047L11.1183 17.5953L7.55699 16.3225"
          stroke="#EFF6FF"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  )
}
export function SettlersPlanet({ className }) {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g opacity="0.6">
        <path
          d="M10.002 16.8727C13.7989 16.8727 16.877 13.7946 16.877 9.99768C16.877 6.20072 13.7989 3.12268 10.002 3.12268C6.205 3.12268 3.12695 6.20072 3.12695 9.99768C3.12695 13.7946 6.205 16.8727 10.002 16.8727Z"
          stroke="#EFF6FF"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <path
        d="M18.4378 13.7538C19.2696 15.3923 19.4904 16.6688 18.9129 17.2463C17.6471 18.5121 12.9714 15.8881 8.54159 11.4583C4.11179 7.02851 1.48784 2.35275 2.7536 1.08698C3.33186 0.508721 4.60985 0.730249 6.24992 1.56365"
        stroke="#EFF6FF"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
export function MissionRocket({ className }) {
  return (
    <svg
      className={className}
      width={20}
      height={21}
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g opacity="1">
        <path
          d="M14.6567 6.70906C14.6567 7.32531 14.1572 7.82486 13.5409 7.82486C12.9246 7.82486 12.4251 7.32531 12.4251 6.70906C12.4251 6.09282 12.9246 5.59326 13.5409 5.59326C14.1572 5.59326 14.6567 6.09282 14.6567 6.70906Z"
          stroke="#EFF6FF"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <g opacity="0.8">
        <path
          d="M4.33063 14.1381C3.37921 14.6912 3.22652 15.1622 2.89569 16.4855L2.60608 17.6439L3.76346 17.3546C5.08975 17.023 5.5604 16.8699 6.11473 15.913"
          stroke="#64748B"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <path
        d="M6.57425 9.77154L3.36586 9.27506C2.50215 9.14143 2.32521 7.9746 3.11048 7.59092C4.90383 6.71469 6.79856 6.26421 8.80191 6.56494M10.4781 13.6733L10.9747 16.8879C11.1081 17.752 12.2758 17.9289 12.6591 17.1429C13.5371 15.343 13.9977 13.4486 13.6976 11.4363M16.045 9.42493C14.4099 10.9581 12.6294 12.3285 10.7288 13.5166L8.65588 14.8124C8.30311 15.0329 7.84478 14.9805 7.5509 14.686L5.5622 12.6935C5.26872 12.3995 5.2169 11.9418 5.43718 11.5896L6.73269 9.51821C7.92132 7.61767 9.29224 5.83746 10.8261 4.20276C12.1311 2.81178 13.9535 2.02271 15.8609 2.02271H17.3347C17.8277 2.02271 18.2273 2.42236 18.2273 2.91535V4.38686C18.2273 6.29563 17.4374 8.11928 16.045 9.42493Z"
        stroke="#EFF6FF"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function ProtonEcosystem({ className }) {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        opacity="0.6"
        d="M7.38115 4.31711C7.99192 2.19109 8.93795 0.833313 9.99993 0.833313C11.8408 0.833313 13.3333 4.93748 13.3333 9.99998C13.3333 15.0625 11.8408 19.1666 9.99993 19.1666C8.49105 19.1666 7.21665 16.4145 6.80591 12.634"
        stroke="#EFF6FF"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M7.21746 15.0766C7.01 15.1481 6.80613 15.2134 6.60639 15.2726C4.49865 15.897 2.8501 15.8331 2.27996 14.9425C1.28746 13.3917 3.93913 9.92248 8.20246 7.19248C12.4658 4.46248 16.7275 3.50665 17.72 5.05748C18.5933 6.42165 16.6466 9.26998 13.2633 11.7942"
        stroke="#EFF6FF"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        opacity="0.8"
        d="M9.99246 6.13996C6.39079 4.24246 3.13163 3.72663 2.27996 5.05746C1.28746 6.60829 3.93913 10.0775 8.20246 12.8075C12.4658 15.5375 16.7275 16.4933 17.72 14.9425C18.3908 13.8941 17.39 11.9991 15.3575 10.0183"
        stroke="#EFF6FF"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
export function NavFeed({ className }) {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g opacity="1">
        <g opacity="0.6">
          <path
            d="M2.05322 17.5L17.9468 17.5"
            stroke="#EFF6FF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <g opacity="0.8">
          <path
            d="M2.05322 12.5L17.9468 12.5"
            stroke="#EFF6FF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <path
          d="M17.5192 2.67657H2.48071C1.92843 2.67657 1.48071 3.12429 1.48071 3.67657V6.32344C1.48071 6.87572 1.92843 7.32344 2.48071 7.32344H17.5192C18.0715 7.32344 18.5192 6.87572 18.5192 6.32344V3.67657C18.5192 3.12429 18.0715 2.67657 17.5192 2.67657Z"
          stroke="#EFF6FF"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  )
}
export function NavWallets({ className }) {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g opacity="1">
        <path
          d="M9.38484 13.6422C11.3963 13.6422 13.027 12.0115 13.027 10C13.027 7.9885 11.3963 6.35785 9.38484 6.35785C7.37333 6.35785 5.74268 7.9885 5.74268 10C5.74268 12.0115 7.37333 13.6422 9.38484 13.6422Z"
          stroke="#EFF6FF"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.38483 18.1248C4.89762 18.1248 1.26001 14.4872 1.26001 10C1.26001 5.51279 4.89762 1.87518 9.38483 1.87518C17.0194 1.87518 17.5096 6.77809 17.5096 10V11.4008C17.5096 12.6387 16.5062 13.6422 15.2683 13.6422C14.0304 13.6422 13.027 12.6387 13.027 11.4008V6.35784"
          stroke="#EFF6FF"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  )
}
export function NavContacts({ className }) {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g opacity="1">
        <g opacity="0.8">
          <path
            d="M15.303 16.8181H18.3333V13.5431C18.3332 13.3918 18.2878 13.2439 18.2028 13.1186C18.1179 12.9933 17.9974 12.8963 17.8568 12.8401L15.022 11.7037C14.8816 11.6477 14.7613 11.5509 14.6763 11.4259C14.5914 11.3009 14.5458 11.1533 14.5454 11.0022V10.3371C15.0049 10.0734 15.3868 9.69337 15.6528 9.23523C15.9188 8.77708 16.0594 8.25698 16.0606 7.72723V6.21207C16.0607 5.68009 15.9208 5.15744 15.6549 4.69668C15.3889 4.23593 15.0064 3.85329 14.5457 3.58724C14.085 3.3212 13.5624 3.18112 13.0305 3.18109C12.4985 3.18106 11.9759 3.32108 11.5151 3.58707"
            stroke="#EFF6FF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <path
          d="M11.7963 13.5977L8.96145 12.4613C8.82111 12.4052 8.70075 12.3085 8.61583 12.1835C8.53092 12.0585 8.48533 11.9109 8.48493 11.7598V11.0946C8.9444 10.831 9.32633 10.4509 9.59231 9.99279C9.85828 9.53464 9.99892 9.01454 10.0001 8.48479V6.96963C10.0001 6.16595 9.68082 5.39518 9.11253 4.82689C8.54423 4.25859 7.77347 3.93933 6.96978 3.93933C6.16609 3.93933 5.39532 4.25859 4.82703 4.82689C4.25874 5.39518 3.93948 6.16595 3.93948 6.96963V8.48479C3.94063 9.01454 4.08127 9.53464 4.34725 9.99279C4.61322 10.4509 4.99516 10.831 5.45463 11.0946V11.7598C5.45453 11.9112 5.40909 12.059 5.32415 12.1844C5.23922 12.3097 5.11869 12.4067 4.97811 12.4628L2.14326 13.5992C2.00293 13.6552 1.88256 13.752 1.79765 13.877C1.71273 14.002 1.66715 14.1496 1.66675 14.3007V16.8181H12.2728V14.3007C12.2727 14.1493 12.2273 14.0014 12.1423 13.8761C12.0574 13.7508 11.9369 13.6538 11.7963 13.5977Z"
          stroke="#EFF6FF"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  )
}

export function CloseIcon({ className }) {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M15.6164 4.38379L4.38379 15.6164"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.38379 4.38379L15.6164 15.6164"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function RunnerBolt({ className }) {
  return (
    <svg
      width={18}
      height={18}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_13657_15166)">
        <path
          d="M9.83333 1.5L1.5 10.6667H9L8.16667 16.5L16.5 7.33333H9L9.83333 1.5Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_13657_15166">
          <rect width={18} height={18} fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export function RunnerActions({ className }) {
  return (
    <svg
      width={18}
      height={20}
      viewBox="0 0 18 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4.87511 6.25003C4.85562 7.18517 4.92013 8.12018 5.06786 9.04378C5.34611 10.2753 6.55886 11.56 6.77861 12.1255C7.96886 10.7155 12.1209 9.12553 14.6724 10.4613C17.5974 12.349 17.3506 15.5238 15.4426 16.906C13.9512 17.7805 12.2537 18.2419 10.5249 18.2425C9.17073 18.3593 7.80697 18.2014 6.51536 17.7783C5.49386 17.9088 3.33536 17.8938 2.45411 16.996C1.84961 16.3803 0.61286 12.85 1.35611 9.07978C2.14061 5.09953 3.45011 1.75003 4.86911 1.75003C5.67863 1.67562 6.4927 1.83162 7.21736 2.20003C7.74236 2.62678 7.36736 3.90028 7.20011 4.07503C7.37793 4.21691 7.49542 4.42087 7.52896 4.64586C7.56249 4.87086 7.50958 5.10022 7.38086 5.28778C6.95272 5.77378 6.39615 6.12914 5.77511 6.31303C5.47403 6.35591 5.16728 6.33444 4.87511 6.25003V6.25003Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.625 14.5C10.4053 14.9544 12.2931 14.6847 13.875 13.75"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function RunnerPages({ className }) {
  return (
    <svg
      width={18}
      height={18}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12.375 3.9375H14.9062C15.13 3.9375 15.3446 4.02639 15.5029 4.18463C15.6611 4.34286 15.75 4.55747 15.75 4.78125V14.0625C15.75 14.5101 15.5722 14.9393 15.2557 15.2557C14.9393 15.5722 14.5101 15.75 14.0625 15.75C13.6149 15.75 13.1857 15.5722 12.8693 15.2557C12.5528 14.9393 12.375 14.5101 12.375 14.0625V3.09375C12.375 2.86997 12.2861 2.65536 12.1279 2.49713C11.9696 2.33889 11.755 2.25 11.5312 2.25H3.09375C2.86997 2.25 2.65536 2.33889 2.49713 2.49713C2.33889 2.65536 2.25 2.86997 2.25 3.09375V13.2188C2.25 13.8901 2.51668 14.5339 2.99139 15.0086C3.46609 15.4833 4.10992 15.75 4.78125 15.75H14.0625"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.625 5.625H9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.625 9H9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.625 12.375H9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function RunnerSettings({ className }) {
  return (
    <svg
      width={18}
      height={18}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_13657_17498)">
        <path
          d="M9.01281 11.176C10.1801 11.176 11.1265 10.2297 11.1265 9.06237C11.1265 7.89504 10.1801 6.94873 9.01281 6.94873C7.84548 6.94873 6.89917 7.89504 6.89917 9.06237C6.89917 10.2297 7.84548 11.176 9.01281 11.176Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.2264 11.1762C14.1326 11.3887 14.1046 11.6244 14.146 11.8529C14.1875 12.0815 14.2964 12.2924 14.4589 12.4584L14.5011 12.5007C14.6321 12.6316 14.7361 12.787 14.807 12.958C14.8779 13.1291 14.9144 13.3125 14.9144 13.4976C14.9144 13.6828 14.8779 13.8662 14.807 14.0372C14.7361 14.2083 14.6321 14.3637 14.5011 14.4946C14.3703 14.6256 14.2149 14.7295 14.0438 14.8004C13.8727 14.8713 13.6894 14.9078 13.5042 14.9078C13.319 14.9078 13.1357 14.8713 12.9646 14.8004C12.7935 14.7295 12.6381 14.6256 12.5073 14.4946L12.465 14.4523C12.2989 14.2899 12.088 14.1809 11.8595 14.1395C11.6309 14.098 11.3952 14.126 11.1827 14.2198C10.9743 14.3091 10.7966 14.4574 10.6714 14.6464C10.5462 14.8354 10.4791 15.057 10.4782 15.2837V15.4034C10.4782 15.7772 10.3297 16.1356 10.0655 16.3998C9.8012 16.6641 9.44279 16.8125 9.06907 16.8125C8.69536 16.8125 8.33695 16.6641 8.0727 16.3998C7.80844 16.1356 7.65998 15.7772 7.65998 15.4034V15.34C7.65453 15.1068 7.57904 14.8807 7.44334 14.6909C7.30764 14.5012 7.118 14.3567 6.89907 14.2762C6.68657 14.1824 6.45084 14.1544 6.22229 14.1958C5.99374 14.2373 5.78284 14.3462 5.61679 14.5087L5.57452 14.5509C5.44366 14.6819 5.28825 14.7859 5.11719 14.8568C4.94613 14.9277 4.76277 14.9642 4.57759 14.9642C4.39241 14.9642 4.20905 14.9277 4.03799 14.8568C3.86693 14.7859 3.71152 14.6819 3.58065 14.5509C3.44964 14.4201 3.34571 14.2647 3.2748 14.0936C3.20389 13.9225 3.16739 13.7392 3.16739 13.554C3.16739 13.3688 3.20389 13.1855 3.2748 13.0144C3.34571 12.8433 3.44964 12.6879 3.58065 12.5571L3.62293 12.5148C3.78535 12.3487 3.89431 12.1379 3.93575 11.9093C3.97719 11.6807 3.94921 11.445 3.85543 11.2325C3.76612 11.0241 3.61782 10.8464 3.4288 10.7212C3.23978 10.5961 3.01828 10.5289 2.79156 10.528H2.67179C2.29807 10.528 1.93967 10.3795 1.67541 10.1153C1.41115 9.851 1.2627 9.49259 1.2627 9.11888C1.2627 8.74516 1.41115 8.38676 1.67541 8.1225C1.93967 7.85824 2.29807 7.70979 2.67179 7.70979H2.7352C2.9684 7.70433 3.19457 7.62885 3.3843 7.49314C3.57403 7.35744 3.71855 7.1678 3.79906 6.94887C3.89285 6.73637 3.92083 6.50065 3.87939 6.2721C3.83794 6.04354 3.72899 5.83265 3.56656 5.6666L3.52429 5.62433C3.39328 5.49346 3.28934 5.33805 3.21843 5.16699C3.14752 4.99593 3.11102 4.81257 3.11102 4.62739C3.11102 4.44222 3.14752 4.25886 3.21843 4.08779C3.28934 3.91673 3.39328 3.76133 3.52429 3.63046C3.65516 3.49945 3.81056 3.39551 3.98163 3.3246C4.15269 3.25369 4.33605 3.21719 4.52122 3.21719C4.7064 3.21719 4.88976 3.25369 5.06082 3.3246C5.23188 3.39551 5.38729 3.49945 5.51816 3.63046L5.56043 3.67273C5.72648 3.83516 5.93738 3.94411 6.16593 3.98555C6.39448 4.02699 6.6302 3.99902 6.84271 3.90523H6.89907C7.10745 3.81592 7.28517 3.66763 7.41035 3.4786C7.53554 3.28958 7.60271 3.06808 7.60362 2.84137V2.72159C7.60362 2.34788 7.75208 1.98947 8.01633 1.72521C8.28059 1.46096 8.639 1.3125 9.01271 1.3125C9.38643 1.3125 9.74483 1.46096 10.0091 1.72521C10.2733 1.98947 10.4218 2.34788 10.4218 2.72159V2.785C10.4227 3.01172 10.4899 3.23322 10.6151 3.42224C10.7402 3.61126 10.918 3.75956 11.1264 3.84887C11.3389 3.94265 11.5746 3.97063 11.8031 3.92919C12.0317 3.88775 12.2426 3.77879 12.4086 3.61637L12.4509 3.5741C12.5818 3.44308 12.7372 3.33915 12.9082 3.26824C13.0793 3.19733 13.2627 3.16083 13.4478 3.16083C13.633 3.16083 13.8164 3.19733 13.9874 3.26824C14.1585 3.33915 14.3139 3.44308 14.4448 3.5741C14.5758 3.70496 14.6797 3.86037 14.7506 4.03143C14.8215 4.20249 14.858 4.38585 14.858 4.57103C14.858 4.75621 14.8215 4.93957 14.7506 5.11063C14.6797 5.28169 14.5758 5.4371 14.4448 5.56796L14.4025 5.61024C14.2401 5.77628 14.1311 5.98718 14.0897 6.21573C14.0482 6.44428 14.0762 6.68001 14.17 6.89251V6.94887C14.2593 7.15726 14.4076 7.33498 14.5966 7.46016C14.7856 7.58534 15.0071 7.65252 15.2339 7.65342H15.3536C15.7273 7.65342 16.0858 7.80188 16.35 8.06614C16.6143 8.33039 16.7627 8.6888 16.7627 9.06252C16.7627 9.43623 16.6143 9.79464 16.35 10.0589C16.0858 10.3232 15.7273 10.4716 15.3536 10.4716H15.2902C15.0635 10.4725 14.842 10.5397 14.653 10.6649C14.464 10.7901 14.3157 10.9678 14.2264 11.1762V11.1762Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_13657_17498">
          <rect width={18} height={18} fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export function RunnerSend({ className }) {
  return (
    <svg
      width={18}
      height={18}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_13657_17518)">
        <path
          d="M9 15.2563L9 2.7436"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2.74365 9L9.00002 2.74363L15.2564 9"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_13657_17518">
          <rect width={18} height={18} fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}
export function RunnerWallet({ className }) {
  return (
    <svg
      width={18}
      height={18}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8.4464 12.2776C10.2568 12.2776 11.7243 10.81 11.7243 8.99962C11.7243 7.18926 10.2568 5.72168 8.4464 5.72168C6.63604 5.72168 5.16846 7.18926 5.16846 8.99962C5.16846 10.81 6.63604 12.2776 8.4464 12.2776Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.44637 16.3122C4.40788 16.3122 1.13403 13.0384 1.13403 8.99983C1.13403 4.96135 4.40788 1.6875 8.44637 1.6875C15.3174 1.6875 15.7587 6.10012 15.7587 8.99983V10.2606C15.7587 11.3747 14.8556 12.2778 13.7415 12.2778C12.6274 12.2778 11.7243 11.3747 11.7243 10.2606V5.72189"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
export function RunnerTheme({ className }) {
  return (
    <svg
      className={className}
      width={18}
      height={18}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10 13.75C12.0711 13.75 13.75 12.0711 13.75 10C13.75 7.92893 12.0711 6.25 10 6.25C7.92893 6.25 6.25 7.92893 6.25 10C6.25 12.0711 7.92893 13.75 10 13.75Z"
        stroke="currentColor"
        strokeWidth="1.65"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g opacity="0.6">
        <path
          d="M10 1.75V3.25"
          stroke="currentColor"
          strokeWidth="1.65"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10 16.75V18.25"
          stroke="currentColor"
          strokeWidth="1.65"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4.16528 4.16504L5.23028 5.23004"
          stroke="currentColor"
          strokeWidth="1.65"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.77 14.77L15.835 15.835"
          stroke="currentColor"
          strokeWidth="1.65"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1.75 10H3.25"
          stroke="currentColor"
          strokeWidth="1.65"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16.75 10H18.25"
          stroke="currentColor"
          strokeWidth="1.65"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4.16528 15.835L5.23028 14.77"
          stroke="currentColor"
          strokeWidth="1.65"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.77 5.23004L15.835 4.16504"
          stroke="currentColor"
          strokeWidth="1.65"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  )
}
export function RunnerArrowUp({ className }) {
  return (
    <svg
      width={8}
      height={8}
      viewBox="0 0 8 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4 1.6665L4 6.33317"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.33325 4L3.99992 6.33333L1.66659 4"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
export function RunnerArrowDown({ className }) {
  return (
    <svg
      width={8}
      height={8}
      viewBox="0 0 8 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4 6.3335L4 1.66683"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.66675 4L4.00008 1.66667L6.33341 4"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
export function RunnerActivate({ className }) {
  return (
    <svg
      width={8}
      height={8}
      viewBox="0 0 8 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_13588_24154)">
        <path
          d="M1 5L6.33333 5C6.51014 5 6.67971 4.92976 6.80474 4.80474C6.92976 4.67971 7 4.51014 7 4.33333L7 1.33333"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2.66675 3.33317L1.00008 4.99984L2.66675 6.6665"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_13588_24154">
          <rect width={8} height={8} fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}
export function RunnerRightArrow({ className }) {
  return (
    <svg
      width={20}
      height={16}
      viewBox="0 0 20 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g opacity="0.6">
        <path
          d="M10 12L14 8L10 4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  )
}
export function WalletScan({ className }) {
  return (
    <svg
      className={className}
      width={16}
      height={17}
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g opacity="1">
        <path
          d="M2 5.85V3.45C2 3.13174 2.12643 2.82652 2.35147 2.60147C2.57652 2.37643 2.88174 2.25 3.2 2.25H5.6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.4 2.25H12.8C13.1183 2.25 13.4235 2.37643 13.6486 2.60147C13.8736 2.82652 14 3.13174 14 3.45V5.85"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14 10.65V13.05C14 13.3683 13.8736 13.6735 13.6486 13.8986C13.4235 14.1236 13.1183 14.25 12.8 14.25H10.4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.6 14.25H3.2C2.88174 14.25 2.57652 14.1236 2.35147 13.8986C2.12643 13.6735 2 13.3683 2 13.05V10.65"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  )
}
export function WalletPower({ className }) {
  return (
    <svg
      className={className}
      width={18}
      height={19}
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_13730_9713)">
        <path
          d="M13.8752 4.88635C14.7182 5.82797 15.2704 6.99347 15.4654 8.24212C15.6604 9.49077 15.4897 10.7692 14.974 11.9229C14.4583 13.0767 13.6197 14.0565 12.5593 14.744C11.4989 15.4316 10.2621 15.7974 8.99834 15.7974C7.73456 15.7974 6.4978 15.4316 5.43741 14.744C4.37702 14.0565 3.53834 13.0767 3.02264 11.9229C2.50694 10.7692 2.33628 9.49077 2.53126 8.24212C2.72624 6.99347 3.27853 5.82797 4.12143 4.88635"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 1.61365V8.1591"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_13730_9713">
          <rect
            width={18}
            height={18}
            fill="white"
            transform="translate(0 0.25)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}
export function Feedback({ className }) {
  return (
    <svg
      className={className}
      width={18}
      height={19}
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g opacity="1" clipPath="url(#clip0_13730_2951)">
        <g opacity="0.8">
          <path
            d="M0.75 9.25H2.25"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.1665 3.4165L4.227 4.477"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 1V2.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.8335 3.4165L13.773 4.477"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.25 9.25H15.75"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <path
          d="M13.5 9.25C13.5 6.7645 11.4855 4.75 9 4.75C6.5145 4.75 4.5 6.7645 4.5 9.25C4.5 11.2083 5.75325 12.8702 7.5 13.4882V16.75H10.5V13.4882C12.2467 12.8702 13.5 11.2083 13.5 9.25Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_13730_2951">
          <rect
            width={18}
            height={18}
            fill="white"
            transform="translate(0 0.25)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}
export function Refresh({ className }) {
  return (
    <svg
      className={className}
      width={22}
      height={19}
      viewBox="0 0 22 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g opacity="1">
        <path
          d="M21.2236 10.8625L17.9951 14.091M17.9951 14.091L14.7666 10.8625M17.9951 14.091L17.8444 9.24821C17.8447 8.09131 17.5519 6.95319 16.9934 5.94005C16.4349 4.9269 15.6288 4.07176 14.6504 3.45441C13.672 2.83705 12.5531 2.47761 11.3982 2.40963C10.2433 2.34164 9.08999 2.56732 8.0459 3.06562"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M0.776373 7.63391L4.00488 4.4054M4.00488 4.4054L7.23339 7.63391M4.00488 4.4054L4.15555 9.24816C4.15526 10.4051 4.44804 11.5432 5.00657 12.5563C5.56511 13.5695 6.37119 14.4246 7.3496 15.042C8.32802 15.6593 9.44688 16.0188 10.6018 16.0867C11.7567 16.1547 12.91 15.929 13.9541 15.4308"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  )
}

export {
  ArrowDown,
  ArrowUp,
  ArrowSwap,
  ArrowRefresh,
  Airdrop,
  Send,
  MoneyReceive,
  Swap,
  OTC,
  Settings,
  EyeOff,
  EyeOn,
  Search,
  ChevronDown,
  Lightning,
  PassiveIncomeIcon,
  WalletIcon,
  MoneyVault,
  MoneyPool,
  MoneyReward,
  MyNFTs,
  SystemTheme,
  MoneyReceipt,
  ArrowUpAlt,
  Farming,
  MoneySend,
  Selling,
  Gavel,
  Memo,
  Verified,
  Bookmark,
  Globe,
  Twitter,
  Discord,
  Telegram,
  Journal,
  Padlock,
  Star,
  Whitelist,
  Themes,
  Airdrops,
  Console,
  Alpha,
  PaintRoller,
  ArrowRight,
  Share,
  CheckComplete,
  Play,
  Dashboard,
  Feed,
  Notifications,
  WalletNav,
  Activity,
  Collectibles,
  Marketplace,
  Protocols,
  Learn,
  MenuSend,
  MenuReceive,
  MenuSwap,
  MenuOTC,
  MenuProfile,
  MenuMore,
  QuickActions,
  SidebarLiquid,
  ToggleOn,
  ToggleOff,
  DashboardGraph,
}

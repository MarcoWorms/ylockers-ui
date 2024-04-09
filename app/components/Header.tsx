'use client'

import Button from "./Button";
import Link from "next/link";
import { ReactNode } from "react";

type Item = { text: string, link: string }
type Items = Array<Item>
type HeaderProps = {
  items: Items,
  selected?: string,
  launchApp?: boolean,
  launchText?: string,
  className?: string,
  onClickLaunch?: () => void,
}

const Header = ({ items, selected="", launchApp=true, launchText='Launch App', className="", onClickLaunch }: HeaderProps) => (
  <header className={`flex flex-wrap justify-between items-center z-10  space-y-2 ${
    launchApp ? 'xl:w-[1200px] w-full px-4 xl:p-0 h-[72px]' : ''
  } ${className}`}>
    <div className="space-x-4 py-4">
      {items.map((item:Item) => (
        <Link
          href={item.link}
          key={item.text}
          className={`mx-2 py-2 hover:border-b-2 ${launchApp ? '' : 'py-[18px]'} ${
            selected === item.text
              ? 'border-b-2 font-bold px-2'
              : (launchApp
                ? 'font-thin'
                : 'px-2')} ${
              (!launchApp && !(selected === item.text))
                ? 'text-soft-blue'
                : ''
          }`}>
          {item.text}
        </Link>
      ))}
    </div>
    {(launchApp && !onClickLaunch) ? <Link href="/app?tab=stake">
      <Button style="transparent">{launchText}</Button>
    </Link> : (launchApp && onClickLaunch) && <div>
      <Button onClick={onClickLaunch} style="transparent">{launchText}</Button>
    </div>}
  </header>
)

export const headerItems = [
  { text: 'Earn', link: '/' },
  { text: 'About', link: '/about' },
  { text: 'Expired farms', link: '/expired' },
]

export default Header
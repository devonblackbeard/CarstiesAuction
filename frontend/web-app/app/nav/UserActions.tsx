'use client'

import { Button, Dropdown } from 'flowbite-react'
import { User } from 'next-auth'
import { signOut } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'
import { AiFillCar, AiFillTrophy, AiOutlineLogout } from 'react-icons/ai'
import { HiCog, HiUser } from 'react-icons/hi2'

type Props = {
    user: Partial<User>
}

const UserActions = ({ user }: Props) => {
    return (
        <Dropdown
            inline
            label={`Welcome ${user.name}`}
        >
            <Dropdown.Item icon={HiUser}>
                <Link href='/'>
                    My Auctions
                </Link>
            </Dropdown.Item>

            <Dropdown.Item icon={AiFillTrophy}>
                <Link href='/'>
                    Auctions won
                </Link>
            </Dropdown.Item>

            <Dropdown.Item icon={AiFillCar}>
                <Link href='/auctions/create'>
                    Sell my car
                </Link>
            </Dropdown.Item>

            <Dropdown.Item icon={HiCog}>
                <Link href='/session'>
                    Session (dev only)
                </Link>
            </Dropdown.Item>

            <Dropdown.Divider />

            <Dropdown.Item icon={AiOutlineLogout} onClick={() => signOut({ callbackUrl: '/' })}>
                <Link href='/session'>
                    Sign Out
                </Link>
            </Dropdown.Item>


        </Dropdown>
    )
}

export default UserActions
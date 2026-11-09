'use client'

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

interface SocialLinkProps{
    icon:any,
    label:string,
    href:string
}

export default function SocialLink({icon, label, href}:SocialLinkProps){

    const [hovered, setHovered] = useState(false)

    return(
        <Link
            href={href}
            target='_blank'
            onMouseEnter={()=>{setHovered(true)}}
            onMouseLeave={()=>{setHovered(false)}}
            className='flex'
        >
            <div className="h-5 w-5">
                {icon}
            </div>
            <AnimatePresence>
                {hovered && (
                <motion.span
                    initial={{ width: 0, opacity: 0, marginLeft: 0 }}
                    animate={{ width: 'auto', opacity: 1, marginLeft: 8 }}
                    exit={{ width: 0, opacity: 0, marginLeft: 0 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                    className="overflow-hidden whitespace-nowrap font-medium text-sm"
                >
                    {label}
                </motion.span>
                )}
            </AnimatePresence>
        </Link>
    )

}
"use client"

import { ReactNode, useCallback, useRef } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"

const Modal = ({ children }: { children: ReactNode }) => {

    const router = useRouter();
    const overlay = useRef<HTMLDivElement>(null);
    const wrapper = useRef<HTMLDivElement>(null);

    const onDismiss = useCallback(() => {
        router.push('/');
    }, [router]);

    const handleClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        if ((e.target === overlay.current) && onDismiss) {
            onDismiss();
        }
    }, [onDismiss, overlay])



    return (
        <div ref={overlay} className="modal" onClick={handleClick}>
            <button type="button" className="absolute top-4 right-8" onClick={onDismiss}>
                <Image src="/close.svg" width={17} height={17} alt="Close" />
            </button>

            <div ref={wrapper} className="modal_wrapper">
                {children}
            </div>
        </div>
    )
}

export default Modal

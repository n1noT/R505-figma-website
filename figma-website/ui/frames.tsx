import { useId, useEffect } from 'react';

export default function Frames({ frame, setClipPathId }) {
    const clipPathId = useId();
    useEffect(() => {
        setClipPathId(clipPathId);
    }, [clipPathId, setClipPathId]);

    if (frame == 'picked-retangle') {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 648 648"
                className="absolute inset-0 w-full h-full"
                preserveAspectRatio="none"
            >
                <defs>
                    <clipPath id={clipPathId}>
                        <path d="M648 4.225v639.459a1 1 0 0 1-1.517.856l-1.034 1.712 1.034-1.712-196.557-118.676a5 5 0 0 0-6.131.756L325.709 645.449a1 1 0 0 1-1.418 0L206.205 526.62a5 5 0 0 0-6.131-.756L3.517 644.54A1 1 0 0 1 2 643.684V4.224a1 1 0 0 1 1.504-.863l1.008-1.727L3.504 3.36l196.643 114.77a5 5 0 0 0 6.007-.734L324.303 2.468a1 1 0 0 1 1.394 0l118.149 114.929a5 5 0 0 0 6.007.734L646.496 3.361a1 1 0 0 1 1.504.864" />
                    </clipPath>
                </defs>
                <rect width="100%" height="100%" clipPath={`url(#${clipPathId})`} />
            </svg>
        );
    }
    if (frame == 'hourglass') {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 648 648"
                className="absolute inset-0 w-full h-full"
                preserveAspectRatio="none"
            >
                <defs>
                    <clipPath id={clipPathId}>
                        <path d="M650 0H0v125.496C0 231.179 81.97 317.718 185.802 325 81.971 332.282 0 418.821 0 524.504V650h650V524.504C650 418.82 568.029 332.282 464.198 325 568.029 317.718 650 231.179 650 125.496z" />
                    </clipPath>
                </defs>
                <rect width="100%" height="100%" clipPath={`url(#${clipPathId})`} />
            </svg>
        );
    }
    if (frame == 'octogon') {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 648 648"
                className="absolute inset-0 w-full h-full"
                preserveAspectRatio="none"
            >
                <defs>
                    <clipPath id={clipPathId}>
                        <path d="m647.629 324.502 1.848-.765zL553.485 97.219a1.3 1.3 0 0 0-.704-.704L325.498 2.37a1.3 1.3 0 0 0-.996 0l-.765-1.848.765 1.848L97.219 96.515a1.3 1.3 0 0 0-.704.704L2.37 324.502a1.3 1.3 0 0 0 0 .996l94.144 227.283a1.3 1.3 0 0 0 .704.704l227.283 94.144c.319.132.677.132.996 0l227.283-94.144c.319-.132.572-.385.704-.704l94.144-227.283a1.3 1.3 0 0 0 0-.996" />
                    </clipPath>
                </defs>
                <rect width="100%" height="100%" clipPath={`url(#${clipPathId})`} />
            </svg>
        );
    }

    if (frame == 'square') {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 650 650"
                className="absolute inset-0 w-full h-full"
                preserveAspectRatio="none"
            >
                <defs>
                    <clipPath id={clipPathId}>
                        <rect width="646" height="646" x="2" y="2" rx="103" />
                    </clipPath>
                </defs>
                <rect width="100%" height="100%" clipPath={`url(#${clipPathId})`} fill="url(#a)" />
            </svg>
        );
    }
}
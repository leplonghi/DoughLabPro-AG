import React from 'react';

const DOUGHY_AVATAR_SRC = '/doughy-assistant-avatar.png';

interface DoughyAvatarProps {
    className?: string;
    imageClassName?: string;
    alt?: string;
}

export const DoughyAvatar: React.FC<DoughyAvatarProps> = ({
    className = 'h-full w-full',
    imageClassName = 'h-full w-full object-contain',
    alt = 'Doughy assistant avatar',
}) => (
    <div className={className}>
        <img
            src={DOUGHY_AVATAR_SRC}
            alt={alt}
            className={imageClassName}
            loading="eager"
            decoding="async"
        />
    </div>
);

export default DoughyAvatar;

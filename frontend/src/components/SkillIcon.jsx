import * as SiIcons from "react-icons/si";

export default function SkillIcon({ iconName, color, size = 40}) {
    const IconComponent = SiIcons[iconName];
    if (!IconComponent) return null; // fallback
    return <IconComponent color={color} size={size} />;
}
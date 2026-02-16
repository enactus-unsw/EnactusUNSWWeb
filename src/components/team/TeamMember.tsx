import { TeamMemberProps } from '../../types/team';

export function TeamMember({ imageSrc, name, role }: TeamMemberProps) {
  return (
    <div className="text-center">
      <div className="mx-auto aspect-square w-[160px] overflow-hidden rounded-full border-[10px] border-[#FFC107] bg-[#ddd] sm:w-[200px] sm:border-[12px] md:w-[220px]">
        <img src={imageSrc} alt={name} className="h-full w-full object-cover" />
      </div>
      <div className="mt-2">
        <div className="text-base font-bold sm:text-lg">{name}</div>
        <div className="text-sm sm:text-base">{role}</div>
      </div>
    </div>
  );
}

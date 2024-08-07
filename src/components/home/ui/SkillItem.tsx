
import Image from "next/image";
import CardBox from "@/components/core/CardBox";
import Row from "@/components/core/Row";
import Column from "@/components/core/Column";
import { Skill, SkillSet } from "../../../..//typings";
import { urlFor } from "../../../../sanity";

const SkillItem = ({ data }: { data: SkillSet }) => {
    console.log(data);
    
    if (!data) return null;
    return (
        <CardBox className='p-4 items-center justify-start bg-[var(--textColor10)] w-full group'>
            <h3 className='text-xs/none border-[2px] sm:text-sm/none font-medium relative border-white/[0.2] text-white hover:text-[var(--primaryColor)] px-4 py-2 rounded-full'>
                <span className='text-lg sm:block'>{data?.title}</span>
                <span className='absolute inset-x-0 w-full mx-auto -bottom-px bg-gradient-to-r from-transparent via-[var(--primaryColor)] to-transparent  h-[2px]' />
            </h3>

            {data?.skills?.length > 0 ? (
                <Row className='gap-4 mt-4 flex-wrap justify-center items-center'>
                    {data.skills.map((skill: Skill, index: number) => {
                        return (
                            <Column
                                key={`skill-item-${index}`}
                                className='items-center gap-1 text-[var(--textColor)] hover:bg-transparent cursor-pointer'
                            >
                                {skill?.image ? (
                                    <Image
                                        src={urlFor(
                                            skill.image.asset._ref
                                        ).url()}
                                        alt={`icon-3`}
                                        width={144}
                                        height={144}
                                        sizes='100%'
                                        loading='lazy'
                                        placeholder='blur'
                                        blurDataURL='/images/placeholder.png'
                                        className='aspect-square h-14 md:h-16 p-2 md:p-3 w-14 md:w-16 rounded-full flex items-center justify-center bg-[rgba(248,248,248,0.015)]
    shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)]'
                                    />
                                ) : null}

                                <p className='text-xs/6 font-normal'>
                                    {skill.title}
                                </p>
                            </Column>
                        );
                    })}
                </Row>
            ) : null}
        </CardBox>
    );
};

export default SkillItem;

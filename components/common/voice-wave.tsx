import { Download, Loader2, Pause, Play, Undo2 } from 'lucide-react';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import WaveSurfer from 'wavesurfer.js';

const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
};

const VoiceWave = ({ audioURL }: { audioURL: string }) => {
    const waveformRef = useRef<HTMLDivElement | null>(null);
    const wavesurferRef = useRef<WaveSurfer | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if (waveformRef.current) {
            wavesurferRef.current = WaveSurfer.create({
                container: waveformRef.current,
                waveColor: '#BCBCBC',
                progressColor: 'black',
                height: 44,
                barWidth: 2,
                barGap: 2,
                barRadius: 0,
                // Removed 'responsive' as it is not a valid WaveSurfer option
                normalize: true,
                cursorWidth: 0,
            });

            wavesurferRef.current.load(audioURL);

            wavesurferRef.current.on('ready', () => {
                setDuration(wavesurferRef.current!.getDuration());
                setIsLoading(false); // 👈 stop loader
            });


            wavesurferRef.current.on('audioprocess', () => {
                setCurrentTime(wavesurferRef.current!.getCurrentTime());
            });

            wavesurferRef.current.on('pause', () => setIsPlaying(false));
            wavesurferRef.current.on('play', () => setIsPlaying(true));
        }

        return () => {
            wavesurferRef.current?.destroy();
        };
    }, [audioURL]);

    const handlePlayPause = () => {
        wavesurferRef.current?.playPause();
    };

    const handleSkip = (amount: number) => {
        if (!wavesurferRef.current) return;
        const wave = wavesurferRef.current;
        const current = wave.getCurrentTime();
        const duration = wave.getDuration();
        const newTime = Math.min(Math.max(current + amount, 0), duration);
        wave.seekTo(newTime / duration);
        setCurrentTime(newTime); // ✅ update the timeline right away
    };

    return (
        <div className="w-full relative px-4 800:px-6 pt-8 pb-6">
            {/* laoder  */}
            {isLoading && <div className='w-full h-full absolute flex-col gap-1 top-0 left-0 bg-gray-50 z-[10] flex items-center justify-center'>
                <Loader2 className='animate-spin' />
                <p className='text-sm text-[#787881]'>
                    Loading audio
                </p>
            </div>}
            <div className="w-full min-h-[43px]" ref={waveformRef}></div>

            <div className="flex items-center justify-between pl-1.5 mt-6">
                <div className="flex gap-4">
                    <button
                        onClick={handlePlayPause}
                        className="size-[32px] cursor-pointer hover:opacity-80 transition-all aspect-square bg-[#0F0F10] !rounded-[4px] flex items-center justify-center"
                    >
                        {
                            isPlaying
                                ?
                                <Pause className='text-white fill-white size-4 aspect-square shrink-0' />
                                :
                                <Play className='text-white fill-white size-4 aspect-square shrink-0' />
                        }
                    </button>
                    <div className='flex items-center justify-center gap-6'>
                        <button
                            onClick={() => handleSkip(-5)}
                            className="cursor-pointer hover:opacity-80 transition-all"
                        >
                            <Undo2 strokeWidth={1.4} className='text-[#0F0F10] size-[18px] aspect-square shrink-0' />
                        </button>
                        <button
                            onClick={() => handleSkip(5)}
                            className="cursor-pointer hover:opacity-80 transition-all"
                        >
                            <Undo2 strokeWidth={1.4} className='text-[#0F0F10] size-[18px] aspect-square shrink-0 -scale-x-100' />
                        </button>

                    </div>
                </div>


                <div className='flex items-center justify-center gap-2'>
                    <p className='text-sm font-inter font-[400]'>
                        {formatTime(currentTime)} / {formatTime(duration)}
                    </p>
                    <Link
                        href={audioURL}
                        download
                        target='_blank'
                        className="border-[1px] size-[36px] aspect-square hover:bg-gray-100 flex items-center justify-center border-[#E5E5E8] rounded-[7px]"
                    >
                        <Download className='size-4 aspect-square shrink-0 text-[#373738]' strokeWidth={2} />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default VoiceWave;
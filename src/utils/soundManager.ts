// Simple synth for UI sounds using Web Audio API
// No external assets required, purely generative code.

class AudioSynth {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private isMuted: boolean = false;

  constructor() {
    // Initialize on first user interaction to handle autoplay policies
    if (typeof window !== "undefined") {
      window.addEventListener("click", this.initAudio, { once: true });
      window.addEventListener("keydown", this.initAudio, { once: true });
    }
  }

  private initAudio = () => {
    if (!this.ctx) {
      const AudioContextClass =
        window.AudioContext || (window as any).webkitAudioContext;
      if (AudioContextClass) {
        this.ctx = new AudioContextClass();
        this.masterGain = this.ctx.createGain();
        this.masterGain.connect(this.ctx.destination);
        this.masterGain.gain.value = 0.3; // Global volume
      }
    } else if (this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  };

  public setMuted(muted: boolean) {
    this.isMuted = muted;
    if (this.masterGain) {
      // Ramp for smooth mute/unmute
      const currentTime = this.ctx?.currentTime || 0;
      this.masterGain.gain.cancelScheduledValues(currentTime);
      this.masterGain.gain.linearRampToValueAtTime(
        muted ? 0 : 0.3,
        currentTime + 0.1,
      );
    }
  }

  public playHover() {
    if (!this.ctx || this.isMuted) return;
    this.initAudio(); // Ensure context is ready

    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    // High tech beep
    osc.type = "sine";
    osc.frequency.setValueAtTime(800, t);
    osc.frequency.exponentialRampToValueAtTime(1200, t + 0.05);

    gain.gain.setValueAtTime(0.05, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.05);

    osc.connect(gain);
    gain.connect(this.masterGain!);

    osc.start(t);
    osc.stop(t + 0.05);
  }

  public playClick() {
    if (!this.ctx || this.isMuted) return;
    this.initAudio();

    const t = this.ctx.currentTime;

    // Mechanical key switch sound simulation
    // 1. The "thock" (square wave)
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = "square";
    osc.frequency.setValueAtTime(300, t);
    osc.frequency.exponentialRampToValueAtTime(50, t + 0.1);

    gain.gain.setValueAtTime(0.1, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.1);

    osc.connect(gain);
    gain.connect(this.masterGain!);

    osc.start(t);
    osc.stop(t + 0.1);

    // 2. High frequency click content (noise-like)
    const osc2 = this.ctx.createOscillator();
    const gain2 = this.ctx.createGain();

    osc2.type = "triangle";
    osc2.frequency.setValueAtTime(2000, t);
    osc2.frequency.linearRampToValueAtTime(1000, t + 0.05);

    gain2.gain.setValueAtTime(0.05, t);
    gain2.gain.exponentialRampToValueAtTime(0.001, t + 0.05);

    osc2.connect(gain2);
    gain2.connect(this.masterGain!);

    osc2.start(t);
    osc2.stop(t + 0.05);
  }

  public playKeystroke() {
    if (!this.ctx || this.isMuted) return;
    this.initAudio();

    const t = this.ctx.currentTime;

    // Simulate mechanical switch with slight randomization
    // Random detune to avoid machine-gun effect
    const detune = Math.random() * 200 - 100; // +/- 100 cents

    // 1. Impact (Low thud)
    const osc1 = this.ctx.createOscillator();
    const gain1 = this.ctx.createGain();

    osc1.frequency.setValueAtTime(200, t);
    osc1.frequency.exponentialRampToValueAtTime(50, t + 0.08);
    osc1.detune.value = detune;

    gain1.gain.setValueAtTime(0.15, t);
    gain1.gain.exponentialRampToValueAtTime(0.001, t + 0.08);

    osc1.connect(gain1);
    gain1.connect(this.masterGain!);

    osc1.start(t);
    osc1.stop(t + 0.08);

    // 2. Click (High crisp)
    const osc2 = this.ctx.createOscillator();
    const gain2 = this.ctx.createGain();

    osc2.type = "triangle";
    osc2.frequency.setValueAtTime(2500, t);
    osc2.frequency.exponentialRampToValueAtTime(1000, t + 0.03);
    osc2.detune.value = detune;

    gain2.gain.setValueAtTime(0.05, t);
    gain2.gain.exponentialRampToValueAtTime(0.001, t + 0.03);

    osc2.connect(gain2);
    gain2.connect(this.masterGain!);

    osc2.start(t);
    osc2.stop(t + 0.03);
  }
}

export const soundManager = new AudioSynth();

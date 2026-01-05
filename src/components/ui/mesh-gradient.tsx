export function MeshGradient() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      <div 
        className="absolute top-[-10%] left-[-5%] w-[50%] h-[50%] bg-primary/10 blur-[120px] rounded-full animate-pulse" 
        style={{ animationDuration: '8s' }}
      />
      <div 
        className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] bg-indigo-500/5 blur-[120px] rounded-full animate-pulse" 
        style={{ animationDuration: '12s', animationDelay: '2s' }}
      />
      <div 
        className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-primary/5 blur-[100px] rounded-full animate-pulse" 
        style={{ animationDuration: '10s', animationDelay: '4s' }}
      />
    </div>
  )
}

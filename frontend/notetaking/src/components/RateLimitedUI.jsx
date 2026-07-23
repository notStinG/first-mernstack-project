import { ZapIcon } from "lucide-react";

const RateLimitedUI = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 mt-6">
      <div className="alert alert-warning flex items-center gap-3">
        <ZapIcon className="size-6" />
        <div>
          <h3 className="font-bold">Rate limit reached</h3>
          <p className="text-sm">
            You've made too many requests. Please wait a moment before trying again.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RateLimitedUI;

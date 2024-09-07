import { format } from "date-fns";
import { AuditLog } from "@prisma/client"

import { generateLogMessage } from "@/lib/generate-log-message";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

interface ActivityItemProps {
  data: AuditLog;
};

export const ActivityItem = ({
  data,
}: ActivityItemProps) => {
  return (
    <li className="flex items-center gap-x-2">
      <Avatar className="h-8 w-8">
        <AvatarImage src={data.userImage} />
      </Avatar>
      <div className="flex flex-col space-y-0.5">
        <p className="text-sm text-muted-foreground text-[#929aa3]">
          <span className="font-semibold lowercase text-[#B6C2CF]">
            {data.userName}
          </span> {generateLogMessage(data)}
        </p>
        <p className="text-xs text-muted-foreground text-[#929aa3]">
          {format(new Date(data.createdAt), "MMM d, yyyy 'at' h:mm a")}
        </p>
      </div>
    </li>
  );
};
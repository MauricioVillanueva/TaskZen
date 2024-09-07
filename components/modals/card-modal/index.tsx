"use client";

import { useQuery } from "@tanstack/react-query";

import { CardWithList } from "@/types";
import { fetcher } from "@/lib/fetcher";
import { AuditLog } from "@prisma/client";
import { useCardModal } from "@/hooks/use-card-modal";
import { Dialog, DialogContent } from "@/components/ui/dialog";

import { Header } from "./header";
import { Description } from "./description";
import { Actions } from "./actions";
import { Activity } from "./activity";
import { AddToCard } from "./addToCard";

export const CardModal = () => {
  const id = useCardModal((state) => state.id);
  const isOpen = useCardModal((state) => state.isOpen);
  const onClose = useCardModal((state) => state.onClose);

  const { data: cardData } = useQuery<CardWithList>({
    queryKey: ["card", id],
    queryFn: () => fetcher(`/api/cards/${id}`),
  });

  const { data: auditLogsData } = useQuery<AuditLog[]>({
    queryKey: ["card-logs", id],
    queryFn: () => fetcher(`/api/cards/${id}/logs`),
  });

  
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-[#272727] border-none text-[#B6C2CF]">
        {!cardData ? <Header.Skeleton /> : <Header data={cardData} />}
        <div className="grid grid-cols-1 md:grid-cols-4 md:gap-4">
          <div className="col-span-3">
            <div className="w-full space-y-6">
              {!cardData ? (
                <Description.Skeleton />
              ) : (
                <Description data={cardData} />
              )}
              {!auditLogsData ? (
                <Activity.Skeleton />
              ) : (
                <Activity items={auditLogsData} />
              )}
            </div>
          </div>
          <div>
            {!cardData ? <AddToCard.Skeleton /> : <AddToCard data={cardData} />}
            {!cardData ? <Actions.Skeleton /> : <Actions data={cardData} />}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

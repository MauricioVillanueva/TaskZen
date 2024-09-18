"use client";

import { toast } from "sonner";
import { Tag, UserRoundPlus, Link2, ListOrdered } from "lucide-react";
import { useParams } from "next/navigation";

import { CardWithList } from "@/types";
import { useAction } from "@/hooks/use-action";
import { copyCard } from "@/actions/copy-card";
import { Button } from "@/components/ui/button";
import { deleteCard } from "@/actions/delete-card";
import { Skeleton } from "@/components/ui/skeleton";
import { useCardModal } from "@/hooks/use-card-modal";
import { Labels } from "@/app/(platform)/(dashboard)/board/[boardId]/_components/labels";
import { Priority } from "@/app/(platform)/(dashboard)/board/[boardId]/_components/priority";
import { Attachment } from "@/app/(platform)/(dashboard)/board/[boardId]/_components/attachment";
import { Members } from "@/app/(platform)/(dashboard)/board/[boardId]/_components/members";

interface AddToCardProps {
  data: CardWithList;
}

export const AddToCard = ({ data }: AddToCardProps) => {
  const params = useParams();
  const cardModal = useCardModal();


  const { execute: executeCopyCard, isLoading: isLoadingCopy } = useAction(
    copyCard,
    {
      onSuccess: (data) => {
        toast.success(`Card "${data.title}" copied`);
        cardModal.onClose();
      },
      onError: (error) => {
        toast.error(error);
      },
    }
  );

  const { execute: executeDeleteCard, isLoading: isLoadingDelete } = useAction(
    deleteCard,
    {
      onSuccess: (data) => {
        toast.success(`Card "${data.title}" deleted`);
        cardModal.onClose();
      },
      onError: (error) => {
        toast.error(error);
      },
    }
  );

  const onCopy = () => {
    const boardId = params.boardId as string;

    executeCopyCard({
      id: data.id,
      boardId,
    });
  };

  const onDelete = () => {
    const boardId = params.boardId as string;

    executeDeleteCard({
      id: data.id,
      boardId,
    });
  };

  return (
    <div className="space-y-2 mt-2">
      <p className="text-xs font-semibold text-[#B6C2CF]">Add To Card</p>
      <Labels data={data.labels}/>
      <Priority/>
      <Attachment/>
      <Members/>
    </div>
  );
};

AddToCard.Skeleton = function AddToCardSkeleton() {
  return (
    <div className="space-y-2 mt-2">
      <Skeleton className="w-20 h-4 bg-neutral-200" />
      <Skeleton className="w-full h-8 bg-neutral-200" />
      <Skeleton className="w-full h-8 bg-neutral-200" />
      <Skeleton className="w-full h-8 bg-neutral-200" />
      <Skeleton className="w-full h-8 bg-neutral-200" />
    </div>
  );
};

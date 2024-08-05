"use client";
import { useState, useRef, ElementRef } from "react";
import { Plus, X } from "lucide-react";
import { ListWrapper } from "./list-wrapper";
import { useAction } from "@/hooks/use-action";
import { createList } from "@/actions/create-list";
import { useEventListener, useOnClickOutside } from "usehooks-ts";
import { FormInput } from "@/components/form/form-input";
import { useParams, useRouter } from "next/navigation";
import { FormSubmit } from "@/components/form/form-submit";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export const ListForm = () => {
  const params = useParams();
  const router = useRouter();

  const formRef = useRef<ElementRef<"form">>(null);
  const inputRef = useRef<ElementRef<"input">>(null);

  const [isEditing, setIsEditing] = useState(false);

  const enableEditing = () => {
    setIsEditing(true);
    setTimeout(() => {
      inputRef.current?.focus();
    });
  };

  const disableEditing = () => {
    setIsEditing(false);
  };

  const { execute, fieldErrors } = useAction(createList, {
    onSuccess: (data) => {
      toast.success(`List "${data.title}" created`);
      disableEditing();
      router.refresh();
    },
    onError: (error) => {
      toast.error(error);
    },
  });

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      disableEditing();
    }
  };

  useEventListener("keydown", onKeyDown);
  useOnClickOutside(formRef, disableEditing);

  const onSubmit = (formData: FormData) => {
    const title = formData.get("title") as string;
    const boardId = formData.get("boardId") as string;
    const colorsString = formData.get("listColor") as string;

    let colors: string[] = [];

    try {
      colors = colorsString ? JSON.parse(colorsString) : [];
      console.log(colors);
      if (
        !Array.isArray(colors) ||
        !colors.every((color) => typeof color === "string")
      ) {
        throw new Error("Invalid colors format");
      }
    } catch (error) {
      console.error("Failed to parse colors:", error);
      toast.error("Failed to process colors.");
    }
    execute({
      title,
      boardId,
      colors,
    });
  };

  if (isEditing) {
    return (
      <ListWrapper>
        <form
          action={onSubmit}
          ref={formRef}
          className="w-full p-3 rounded-md bg-white space-y-4 shadow-md"
        >
          <FormInput
            ref={inputRef}
            errors={fieldErrors}
            id="title"
            className="text-sm px-2 py-1 h-7 font-medium border-transparent hover:border-input focus:border-input transition"
            placeholder="Enter list title..."
          />
          <input hidden value={params.boardId} name="boardId" />
          <section className="w-auto h-auto flex flex-col gap-y-2">
            <p className="text-sm font-bold">Background</p>
            <div className="w-full h-auto flex flex-col gap-y-2">
              <div className="w-full h-auto flex items-center justify-start gap-x-2">
                <input
                  id="color1"
                  type="radio"
                  value='["00C3FF","6F00FF","00C3FF"]'
                  name="listColor"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  focus:ring-transparent dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <div className="w-full h-10 bg-gradient-to-br from-[#00C3FF] from-0% via-[#6F00FF] via-50% to-[#00C3FF] to-100% rounded-md" />
              </div>
              <div className="w-full h-auto flex items-center justify-start gap-x-2">
                <input
                  id="color2"
                  type="radio"
                  value='["FF0000","FF1E00","FFFF00"]'
                  name="listColor"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  focus:ring-transparent dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <div className="w-full h-10 bg-gradient-to-br from-[#FF0000] from-0% via-[#FF1E00] via-50% to-[#FFFF00] to-90% rounded-md" />
              </div>
              <div className="w-full h-auto flex items-center justify-start gap-x-2">
                <input
                  id="color3"
                  type="radio"
                  value='["002FFF","6200FF","F700FF"]'
                  name="listColor"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  focus:ring-transparent dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <div className="w-full h-10 bg-gradient-to-br from-[#002FFF] from-0% via-[#6200FF] via-50% to-[#F700FF] to-100% rounded-md" />
              </div>
              <div className="w-full h-auto flex items-center justify-start gap-x-2">
                <input
                  id="color4"
                  type="radio"
                  value='["267200","27E900","77FD55"]'
                  name="listColor"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  focus:ring-transparent dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <div className="w-full h-10 bg-gradient-to-br from-[#267200] from-0% via-[#27E900] via-50% to-[#77FD55] to-100% rounded-md" />
              </div>
              <div className="w-full h-auto flex items-center justify-start gap-x-2">
                <input
                  id="color5"
                  type="radio"
                  value='["FF0000","D400FF","3801FF"]'
                  name="listColor"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  focus:ring-transparent dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <div className="w-full h-10 bg-gradient-to-br from-[#FF0000] from-0% via-[#d400ff] via-50% to-[#3801ff] to-100% rounded-md" />
              </div>
              <div className="w-full h-auto flex items-center justify-start gap-x-2">
                <input
                  id="color6"
                  type="radio"
                  value='["2600FF","0099FF","00F6FF"]'
                  name="listColor"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  focus:ring-transparent dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <div className="w-full h-10 bg-gradient-to-br from-[#2600ff] from-0% via-[#0099ff] via-50% to-[#00F6FF] to-90% rounded-md" />
              </div>
              <div className="w-full h-auto flex items-center justify-start gap-x-2">
                <input
                  id="color7"
                  type="radio"
                  value='["FFE100","FF7B00","FF00D0"]'
                  name="listColor"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  focus:ring-transparent dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <div className="w-full h-10 bg-gradient-to-br from-[#FFE100] from-0% via-[#ff7b00] via-50% to-[#FF00D0] to-90% rounded-md" />
              </div>
              <div className="w-full h-auto flex items-center justify-start gap-x-2">
                <input
                  id="color8"
                  type="radio"
                  value='["55FF00","00FFEA","1A01FF"]'
                  name="listColor"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  focus:ring-transparent dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <div className="w-full h-10 bg-gradient-to-br from-[#55FF00] from-0% via-[#00FFEA] via-50% to-[#1A01FF] to-90% rounded-md" />
              </div>
            </div>
          </section>
          <div className="flex items-center gap-x-1">
            <FormSubmit>Add list</FormSubmit>
            <Button onClick={disableEditing} size="sm" variant="ghost">
              <X className="h-5 w-5" />
            </Button>
          </div>
        </form>
      </ListWrapper>
    );
  }

  return (
    <ListWrapper>
      <button
        onClick={enableEditing}
        className="w-full rounded-md backdrop-blur-sm bg-white/70 hover:bg-white/30 transition p-3 flex items-center font-medium text-sm hover:text-white"
      >
        <Plus className="h-4 w-4 mr-2" />
        Add a list
      </button>
    </ListWrapper>
  );
};

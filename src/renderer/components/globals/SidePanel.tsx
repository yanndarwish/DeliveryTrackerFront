import { ReactNode, useEffect, useRef, useState } from 'react';
import { IoMdClose } from 'react-icons/io';

export interface ISidePanelProps {
  title: String;
  open: Boolean;
  setOpen: (state: Boolean) => void;
  children: ReactNode;
}

const SidePanel = (props: ISidePanelProps) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const [panel, setPanel] = useState<HTMLDivElement | null>(null);

  let focusableEls = panel?.querySelectorAll(
    'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])'
  );
  let firstFocusableEl = focusableEls && focusableEls[0];
  let lastFocusableEl = focusableEls && focusableEls[focusableEls.length - 1];

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Escape') {
      props.setOpen(false);
    }
    // Handle Shift Tab press
    if (e.shiftKey && e.key === 'Tab') {
      if (document.activeElement === firstFocusableEl) {
        (lastFocusableEl as HTMLElement)?.focus();
        e.preventDefault();
      }
      // Handle Tab Press
    } else if (!e.shiftKey && e.key === 'Tab') {
      if (document.activeElement === lastFocusableEl) {
        (firstFocusableEl as HTMLElement)?.focus();
        e.preventDefault();
      }
    }
  };

  const handleOverlayClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (e.target === overlayRef.current) {
      props.setOpen(false);
    }
  };

  // select panel as soon as it's rendered
  useEffect(() => {
    if (props.open) {
      setPanel(overlayRef.current);
    }
  }, [props.open]);

  return (
    // overlay
    <div
      ref={overlayRef}
      className="fixed top-0 left-0 right-0 bottom-0 bg-black/60"
      onClick={(e) => handleOverlayClick(e)}
      onKeyDown={(e) => handleKeyDown(e)}
    >
      {/* side panel */}
      <div
        id="side-panel"
        className="absolute top-0 right-0 w-full h-full bg-neutral-800 sm:w-[520px] flex flex-col gap-8 p-8"
      >
        {/* panel header */}
        <div>
          <div className="flex justify-between items-center">
            <h2 className="text-3xl text-white font-medium">{props.title}</h2>
            <button
              className="p-1 rounded-full text-neutral-500 focus:outline-emerald-500 hover:text-emerald-500 focus:text-emerald-500  hover:bg-neutral-700 focus:bg-neutral-700"
              onClick={() => props.setOpen(false)}
              autoFocus
            >
              <IoMdClose size={24} />
            </button>
          </div>
        </div>
        {/* panel content */}
        {props.children}
      </div>
    </div>
  );
};

export default SidePanel;

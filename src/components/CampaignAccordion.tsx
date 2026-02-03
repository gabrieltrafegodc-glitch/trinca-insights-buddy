import { Calendar, ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import CampaignReport, { CampaignData } from "./CampaignReport";

interface CampaignAccordionProps {
  campaigns: CampaignData[];
}

const CampaignAccordion = ({ campaigns }: CampaignAccordionProps) => {
  return (
    <Accordion type="single" collapsible className="space-y-4">
      {campaigns.map((campaign, index) => {
        const EventIcon = campaign.eventIcon;
        
        return (
          <AccordionItem
            key={index}
            value={`campaign-${index}`}
            className="glass rounded-xl border-none overflow-hidden"
          >
            <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-white/5 transition-colors [&[data-state=open]>div>.chevron]:rotate-180">
              <div className="flex items-center justify-between w-full pr-4">
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <EventIcon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-base font-semibold text-foreground">
                      {campaign.eventName}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <Calendar className="w-3.5 h-3.5 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">
                        {campaign.eventDate}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium text-primary hidden sm:block">
                    {campaign.investment}
                  </span>
                  <ChevronDown className="chevron w-5 h-5 text-muted-foreground transition-transform duration-200" />
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6 pt-2">
              <CampaignReport campaign={campaign} index={index} />
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};

export default CampaignAccordion;

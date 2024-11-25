import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, { AccordionSummaryProps } from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { IoPlaySharp } from 'react-icons/io5';
import { MdLockOutline } from 'react-icons/md';

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion
    disableGutters
    elevation={0}
    square
    {...props}
  />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&::before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
  ...theme.applyStyles('dark', {
    backgroundColor: 'rgba(255, 255, 255, .05)',
  }),
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function SectionAccordion({ title, lessonsNumber, duration, lessons }: any) {
  const [expanded, setExpanded] = React.useState<string | false>('panel1');

  const handleChange = (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
      >
        <AccordionSummary
          aria-controls='panel1d-content'
          id='panel1d-header'
        >
          <div className='flex ps-2 lg:ps-0 flex-col lg:flex-row justify-between w-full items-start lg:items-center'>
            <h1 className='font-bold'>{title}</h1>
            <div className='mt-2 lg:mt-0 flex items-center gap-4'>
              <span>{lessonsNumber} Lessons</span>
              <span>{duration} hour</span>
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {Array.isArray(lessons) &&
              lessons.length > 0 &&
              lessons.map((lesson: any) => {
                return (
                  <div
                    key={lesson.id}
                    className=''
                  >
                    <div className='bg-[#E9F8FC] flex w-full justify-between items-center px-4 py-2 rounded-md mb-2'>
                      <div className='flex items-center gap-2'>
                        <button className='bg-white rounded-full p-2'>
                          <IoPlaySharp
                            size={12}
                            color='#22B9DD'
                          />
                        </button>
                        <span>{lesson.title}</span>
                      </div>
                      <div className='flex items-center gap-2'>
                        <span>{lesson.duration}m</span>
                        {lesson.isLocked && <MdLockOutline />}
                      </div>
                    </div>
                  </div>
                );
              })}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

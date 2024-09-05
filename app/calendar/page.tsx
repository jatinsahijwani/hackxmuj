"use client";
import { useState } from "react";
import FullCalendar from '@fullcalendar/react';
import { formatDate } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import {
    Box,
    List,
    ListItem,
    ListItemText,
    Typography,
} from '@mui/material';

export default function Page() {
    const [dialog,setDialog] = useState(false);
    const [currentEvents, setCurrentEvents] = useState([]);
    const handleDateClick = (selected) => {
        const title = prompt("Please enter a new title for event");
        const calendarApi = selected.view.calendar;
        calendarApi.unselect();
        if (title) {
            calendarApi.addEvent({
                id: `${selected.dataStr}-${title}`,
                title,
                start: selected.startStr,
                end: selected.sendStr,
                allDay: selected.allDay
            });
            setDialog(true);
        }
    };

    const handleEventClick = (selected) => {
        if (
            window.confirm(
                `Are you sure you want to delete the event ${selected.event.title}`
            )
        ) {
            selected.event.remove();
        }
    }

    return (
        <Box m="10px">
            <Header  title="Medications" subtitle="Medicine Reminder" />

            <Box display={'flex'} justifyContent={'space-between'}>
                <Box
                    flex={'1 1 20%'}
                    // backgroundColor={}
                    p="15px"
                    borderRadius={'4px'}
                >
                    <Typography variant="h5">Schedule</Typography>
                    <List>
                        {currentEvents.map((event) => (
                            <ListItem
                                key={event.id}
                                sx={{
                                    // backgroundColor: colors.greenAccent[500],
                                    margin: "10px 0",
                                    borderRadius: "2px",
                                }}
                            >
                                <ListItemText
                                    primary={event.title}
                                    secondary={
                                        <Typography>
                                            {formatDate(event.start, {
                                                year: "numeric",
                                                month: "short",
                                                day: "numeric",
                                            })}
                                        </Typography>
                                    }
                                />
                            </ListItem>
                        ))}
                    </List>
                </Box>
                <Box flex="1 1 100%" ml="15px">
          <FullCalendar
            height="75vh"
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            eventsSet={(events) => setCurrentEvents(events)}
            initialEvents={[
              {
                id: "12315",
                title: "All-day event",
                date: "2022-09-14",
              },
              {
                id: "5123",
                title: "Timed event",
                date: "2022-09-28",
              },
            ]}
          />
        </Box>
            </Box>
        </Box>
    )
}


const Header = ({ title, subtitle }) => {
    return (
        <Box mb="30px">
            <Typography variant="h3" fontWeight={'bold'} sx={{ m: "0 0 5px 0" }} >{title}</Typography>
            <Typography variant="h5">{subtitle}</Typography>
        </Box>
    )
}
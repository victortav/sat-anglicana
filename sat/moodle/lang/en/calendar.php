<?php
// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

/**
 * Strings for component 'calendar', language 'en', branch 'MOODLE_20_STABLE'
 *
 * @package   core_calendar
 * @copyright 1999 onwards Martin Dougiamas  {@link http://moodle.com}
 * @license   http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

$string['advancedoptions'] = 'Advanced options';
$string['allday'] = 'All day';
$string['addevent'] = 'Add events';
$string['annually'] = 'Annually';
$string['activityevent'] = 'Activity event';
$string['calendar'] = 'Calendar';
$string['calendarheading'] = '{$a} Calendar';
$string['calendarpreferences'] = 'Calendar preferences';
$string['calendartypes'] = 'Calendar types';
$string['calendarurl'] = 'Calendar URL: {$a}';
$string['categoryevent'] = 'Category event';
$string['clickhide'] = 'click to hide';
$string['clickshow'] = 'click to show';
$string['colcalendar'] = 'Calendar';
$string['collastupdated'] = 'Last updated';
$string['colpoll'] = 'Update';
$string['colactions'] = 'Actions';
$string['commontasks'] = 'Options';
$string['confirmeventdelete'] = 'Are you sure you want to delete the "{$a}" event?';
$string['confirmeventseriesdelete'] = 'The "{$a->name}" event is part of a series. Do you want to delete just this event, or all {$a->count} events in the series?';
$string['course'] = 'Course';
$string['courseevent'] = 'Course event';
$string['courseevents'] = 'Course events';
$string['categoryevents'] = 'Category events';
$string['courses'] = 'Courses';
$string['customexport'] = 'Custom range ({$a->timestart} - {$a->timeend})';
$string['daily'] = 'Daily';
$string['daynext'] = 'Next day';
$string['dayprev'] = 'Previous day';
$string['dayviewfor'] = 'Day view for:';
$string['dayviewtitle'] = 'Day view: {$a}';
$string['daywithnoevents'] = 'There are no events this day.';
$string['default'] = 'Default';
$string['deleteevent'] = 'Delete event';
$string['deleteevents'] = 'Delete events';
$string['deleteoneevent'] = 'Delete this event';
$string['deleteallevents'] = 'Delete all events';
$string['detailedmonthviewfor'] = 'Detailed month view for:';
$string['detailedmonthviewtitle'] = 'Detailed month view: {$a}';
$string['durationminutes'] = 'Duration in minutes';
$string['durationnone'] = 'Without duration';
$string['durationuntil'] = 'Until';
$string['editevent'] = 'Editing event';
$string['erroraddingevent'] = 'Failed to add event';
$string['errorbadsubscription'] = 'Calendar subscription not found.';
$string['errorbeforecoursestart'] = 'Cannot set event before course start date';
$string['errorcannotimport'] = 'You cannot set up a calendar subscription at this time.';
$string['errorhasuntilandcount'] = 'Either UNTIL or COUNT may appear in a recurrence rule, but UNTIL and COUNT MUST NOT occur in the same recurrence rule.';
$string['errorinvalidbydaysuffix'] = 'Valid values for the day of the week parts of the BYDAY rule are MO, TU, WE, TH, FR, SA and SU';
$string['errorinvalidbydayprefix'] = 'Integer values preceding BYDAY rules can only be present for a MONTHLY or YEARLY recurrence rule.';
$string['errorinvalidbyhour'] = 'Valid values for the BYHOUR rule are 0 to 23.';
$string['errorinvalidinterval'] = 'The value for the INTERVAL rule must be a positive integer.';
$string['errorinvalidbyminute'] = 'Valid values for the BYMINUTE rule are 0 to 59.';
$string['errorinvalidbymonth'] = 'Valid values for the BYMONTH rule are 1 to 12.';
$string['errorinvalidbymonthday'] = 'Valid values for the BYMONTHDAY rule are 1 to 31 or -31 to -1.';
$string['errorinvalidbysetpos'] = 'Valid values for the BYSETPOS rule are 1 to 366 or -366 to -1.';
$string['errorinvalidbyweekno'] = 'Valid values for the BYWEEKNO rule are 1 to 53 or -53 to -1.';
$string['errorinvalidbyyearday'] = 'Valid values for the BYYEARDAY rule are 1 to 366 or -366 to -1.';
$string['errorinvalidbysecond'] = 'Valid values for the BYSECOND rule are 0 to 59.';
$string['errorinvaliddate'] = 'Invalid date';
$string['errorinvalidminutes'] = 'Specify duration in minutes by giving a number between 1 and 999.';
$string['errorinvalidrepeats'] = 'Specify the number of events by giving a number between 1 and 99.';
$string['errorinvalidicalurl'] = 'The given iCal URL is invalid.';
$string['errormustbeusedwithotherbyrule'] = 'The BYSETPOS rule must only be used in conjunction with another BYxxx rule part.';
$string['errornodescription'] = 'Description is required';
$string['errornoeventname'] = 'Name is required';
$string['errornonyearlyfreqwithbyweekno'] = 'The BYWEEKNO rule is only valid for YEARLY rules.';
$string['errorrequiredurlorfile'] = 'Either a URL or a file is required to import a calendar.';
$string['errorrrule'] = 'The passed recurrence rule seems incorrect.';
$string['errorrrulefreq'] = 'The recurrence rule has an invalid frequency parameter.';
$string['errorrruleday'] = 'The recurrence rule has an invalid day parameter.';
$string['eventdate'] = 'Date';
$string['eventdescription'] = 'Description';
$string['eventduration'] = 'Duration';
$string['eventendtime'] = 'End time';
$string['eventendtimewrapped'] = '{$a} (End time)';
$string['eventinstanttime'] = 'Time';
$string['eventkind'] = 'Type of event';
$string['eventname'] = 'Event title';
$string['eventnameandcategory'] = '{$a->category}: {$a->name}';
$string['eventnameandcourse'] = '{$a->course}: {$a->name}';
$string['eventnone'] = 'No events';
$string['eventrepeat'] = 'Repeats';
$string['eventsall'] = 'All events';
$string['eventsdeleted'] = 'Events deleted';
$string['eventsimported'] = 'Events imported: {$a}';
$string['eventsource'] = 'Event source';
$string['eventsupdated'] = 'Events updated: {$a}';
$string['eventsfor'] = '{$a} events';
$string['eventskey'] = 'Events key';
$string['eventspersonal'] = 'My personal events';
$string['eventsrelatedtocourses'] = 'Events related to courses';
$string['eventsrelatedtogroups'] = 'Events related to groups';
$string['eventstarttime'] = 'Start time';
$string['eventstoexport'] = 'Events to export';
$string['eventtime'] = 'Time';
$string['eventtype'] = 'Event type';
$string['eventview'] = 'Event details';
$string['eventcalendareventcreated'] = 'Calendar event created';
$string['eventcalendareventupdated'] = 'Calendar event updated';
$string['eventcalendareventdeleted'] = 'Calendar event deleted';
$string['eventsubscriptioncreated'] = 'Calendar subscription created';
$string['eventsubscriptionupdated'] = 'Calendar subscription updated';
$string['eventsubscriptiondeleted'] = 'Calendar subscription deleted';
$string['eventsubscriptioneditwarning'] = 'This calendar event is part of a subscription.  Any changes you make to this event will be lost if the subscription is deleted.';
$string['expired'] = 'Expired';
$string['explain_site_timeformat'] = 'You can choose to see times in either 12 or 24 hour format for the whole site. If you choose "default", then the format will be automatically chosen according to the language you use in the site. This setting can be overridden by user preferences.';
$string['export'] = 'Export';
$string['exporthelp'] = 'How do I subscribe to this calendar from a calendar application (Google/Outlook/Other)?';
$string['exportbutton'] = 'Export';
$string['exportcalendar'] = 'Export calendar';
$string['forcecalendartype'] = 'Force calendar';
$string['fri'] = 'Fri';
$string['friday'] = 'Friday';
$string['generateurlbutton'] = 'Get calendar URL';
$string['global'] = 'Global';
$string['globalevent'] = 'Global event';
$string['globalevents'] = 'Global events';
$string['gotoactivity'] = 'Go to activity';
$string['gotocalendar'] = 'Go to calendar';
$string['group'] = 'Group';
$string['groupevent'] = 'Group event';
$string['groupevents'] = 'Group events';
$string['eventtypeglobal'] = 'global';
$string['eventtypesite'] = 'global';
$string['eventtypecategory'] = 'category';
$string['eventtypecourse'] = 'course';
$string['eventtypemodule'] = 'module';
$string['eventtypegroup'] = 'group';
$string['eventtypeuser'] = 'user';
$string['hideeventtype'] = 'Hide {$a} events';
$string['showeventtype'] = 'Show {$a} events';
$string['hourly'] = 'Hourly';
$string['importcalendar'] = 'Import calendar';
$string['importcalendarheading'] = 'Import calendar...';
$string['importcalendarfrom'] = 'Import from';
$string['importfromfile'] = 'Calendar file (.ics)';
$string['importfromurl'] = 'Calendar URL';
$string['importfrominstructions'] = 'Please provide either a URL to a remote calendar, or upload a file.';
$string['invalidtimedurationminutes'] = 'The duration in minutes you have entered is invalid. Please enter the duration in minutes greater than 0 or select no duration.';
$string['invalidtimedurationuntil'] = 'The date and time you selected for duration until is before the start time of the event. Please correct this before proceeding.';
$string['invalideventtype'] = 'The event type you have selected is invalid.';
$string['iwanttoexport'] = 'Export';
$string['less'] = 'Less';
$string['managesubscriptions'] = 'Manage subscriptions';
$string['manyevents'] = '{$a} events';
$string['mon'] = 'Mon';
$string['monday'] = 'Monday';
$string['monthly'] = 'Monthly';
$string['monthlyview'] = 'Monthly view';
$string['monthnext'] = 'Next month';
$string['monthprev'] = 'Previous month';
$string['monththis'] = 'This month';
$string['more'] = 'More';
$string['namewithsource'] = '{$a->name} ({$a->source})';
$string['never'] = 'Never';
$string['newevent'] = 'New event';
$string['notitle'] = 'no title';
$string['noupcomingevents'] = 'There are no upcoming events';
$string['nocalendarsubscriptions'] = 'You have no calendar subscriptions.';
$string['oneevent'] = '1 event';
$string['pollinterval'] = 'Update interval';
$string['pollinterval_help'] = 'How often you would like the calendar to update with new events.';
$string['preferences'] = 'Preferences';
$string['preferences_available'] = 'Your personal preferences';
$string['preferredcalendar'] = 'Preferred calendar';
$string['pref_lookahead'] = 'Upcoming events look-ahead';
$string['pref_lookahead_help'] = 'This sets the (maximum) number of days in the future that an event has to start in in order to be displayed as an upcoming event. Events that start beyond this will never be displayed as upcoming. Please note that <strong>there is no guarantee</strong> that all events starting in this time frame will be displayed; if there are too many (more than the "Maximum upcoming events" preference) then the most distant events will not be shown.';
$string['pref_maxevents'] = 'Maximum upcoming events';
$string['pref_maxevents_help'] = 'This sets the maximum number of upcoming events that can be displayed. If you pick a large number here it is possible that upcoming events displays will take up a lot of space on your screen.';
$string['pref_persistflt'] = 'Remember filter settings';
$string['pref_persistflt_help'] = 'If this is enabled, then Moodle will remember your last event filter settings and automatically restore them each time you login.';
$string['pref_startwday'] = 'First day of week';
$string['pref_startwday_help'] = 'Calendar weeks will be shown as starting on the day that you select here.';
$string['pref_timeformat'] = 'Time display format';
$string['pref_timeformat_help'] = 'You can choose to see times in either 12 or 24 hour format. If you choose "default", then the format will be automatically chosen according to the language you use in the site.';
$string['recentupcoming'] = 'Recent and next 60 days';
$string['repeatedevents'] = 'Repeated events';
$string['repeateditall'] = 'Also apply changes to the other {$a} events in this repeat series';
$string['repeateditthis'] = 'Apply changes to this event only';
$string['repeatevent'] = 'Repeat this event';
$string['repeatnone'] = 'No repeats';
$string['repeatweeksl'] = 'Repeat weekly, creating altogether';
$string['repeatweeksr'] = 'events';
$string['sat'] = 'Sat';
$string['saturday'] = 'Saturday';
$string['shown'] = 'shown';
$string['siteevents'] = 'Site events';
$string['spanningevents'] = 'Events underway';
$string['subscriptions'] = 'Subscriptions';
$string['subscriptionname'] = 'Calendar name';
$string['subscriptionremoved'] = 'Calendar subscription {$a} removed';
$string['subscriptionsource'] = 'Event source: {$a}';
$string['subscriptionupdated'] = 'Calendar subscription {$a} updated';
$string['sun'] = 'Sun';
$string['sunday'] = 'Sunday';
$string['thu'] = 'Thu';
$string['thursday'] = 'Thursday';
$string['timeformat_12'] = '12-hour (am/pm)';
$string['timeformat_24'] = '24-hour';
$string['timeperiod'] = 'Time period';
$string['today'] = 'Today';
$string['todayplustitle'] = 'Today {$a}';
$string['tomorrow'] = 'Tomorrow';
$string['tt_deleteevent'] = 'Delete event';
$string['tt_editevent'] = 'Edit event';
$string['tue'] = 'Tue';
$string['tuesday'] = 'Tuesday';
$string['typeclose'] = 'Close event';
$string['typecourse'] = 'Course event';
$string['typecategory'] = 'Category event';
$string['typedue'] = 'Due event';
$string['typegradingdue'] = 'Grading due event';
$string['typegroup'] = 'Group event';
$string['typeopen'] = 'Open event';
$string['typesite'] = 'Site event';
$string['typeuser'] = 'User event';
$string['upcomingevents'] = 'Upcoming events';
$string['upcomingeventsfor'] = 'Upcoming events for:';
$string['urlforical'] = 'URL for iCalendar export, for subscribing to calendar';
$string['user'] = 'User';
$string['userevent'] = 'User event';
$string['userevents'] = 'User events';
$string['wed'] = 'Wed';
$string['wednesday'] = 'Wednesday';
$string['weekly'] = 'Weekly';
$string['weeknext'] = 'Next week';
$string['weekthis'] = 'This week';
$string['when'] = 'When';
$string['yesterday'] = 'Yesterday';
$string['youcandeleteallrepeats'] = 'This event is part of a repeating event series. You can delete this event only, or all {$a} events in the series at once.';

// Deprecated since Moodle 3.2.
$string['for'] = 'for';

// Deprecated since Moodle 3.4.
$string['quickdownloadcalendar'] = 'Quick download / subscribe to calendar';
$string['ical'] = 'iCal';
$string['tt_hidecourse'] = 'Course events are shown (click to hide)';
$string['tt_hideglobal'] = 'Global events are shown (click to hide)';
$string['tt_hidegroups'] = 'Group events are shown (click to hide)';
$string['tt_hideuser'] = 'User events are shown (click to hide)';
$string['tt_showcourse'] = 'Course events are hidden (click to show)';
$string['tt_showglobal'] = 'Global events are hidden (click to show)';
$string['tt_showgroups'] = 'Group events are hidden (click to show)';
$string['tt_showuser'] = 'User events are hidden (click to show)';
$string['hidecourseevents'] = 'Hide course events';
$string['hideglobalevents'] = 'Hide global events';
$string['hidegroupsevents'] = 'Hide group events';
$string['hideuserevents'] = 'Hide user events';
$string['showcourseevents'] = 'Show course events';
$string['showglobalevents'] = 'Show global events';
$string['showgroupsevents'] = 'Show group events';
$string['showuserevents'] = 'Show user events';
$string['subsource'] = 'Event source: {$a->name}';

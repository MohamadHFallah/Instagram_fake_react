
export default {
    DateParser(date) {
        var date1 = new Date();
        var date2 = new Date(date);
        var diff = Math.abs(date2.getTime() - date1.getTime());
        // var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    
        var secondsInMilli = 1000;
        var minutesInMilli = secondsInMilli * 60;
        var hoursInMilli = minutesInMilli * 60;  
        var daysInMilli = hoursInMilli * 24;
    
    
        var checked = diff / 1000;  
    
    
        var diffDays = (diff / daysInMilli);
        diff = diff % daysInMilli;
    
        var diffHours = diff / hoursInMilli;
        diff = diff % hoursInMilli;
    
        var diffMinutes = diff / minutesInMilli;
        diff = diff % minutesInMilli;
    
        if (checked <= 60) {
    
            return "a few moments ago";
        } else if (checked <= 3600 && checked > 61) {
    
            return Math.round(diffMinutes) + " minute ago";
        } else if (checked <= 86400 && checked > 3601) {
    
            return Math.round(diffHours) + " hours ago";
        } else if (checked <= 2592000 && checked > 86400) {
    
            return Math.round(diffDays) + " days ago";
        } else if (diffDays > 30 && diffDays < 365) {
    
            return Math.round((diffDays / 30)) + " months ago";
        } else if (diffDays > 365) {
    
            return Math.round(((diffDays / 365))) + " years ago";
        }
    }
}


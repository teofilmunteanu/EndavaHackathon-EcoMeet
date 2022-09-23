﻿using System;
using System.Collections.Generic;

namespace WebAPI.Models
{
    public partial class Achievement
    {
        public int Id { get; set; }
        public string Title { get; set; } = null!;
        public string Date { get; set; } = null!;
        public string Description { get; set; } = null!;
        public string VolunteersEmail { get; set; } = null!;

        public virtual Volunteer VolunteersEmailNavigation { get; set; } = null!;
    }
}
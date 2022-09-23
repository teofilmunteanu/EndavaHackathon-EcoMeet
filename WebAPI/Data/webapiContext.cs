using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using WebAPI.Models;

namespace WebAPI.Data
{
    public partial class webapiContext : DbContext
    {
        public webapiContext()
        {
        }

        public webapiContext(DbContextOptions<webapiContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Achievement> Achievements { get; set; } = null!;
        public virtual DbSet<Administrator> Administrators { get; set; } = null!;
        public virtual DbSet<Collaborator> Collaborators { get; set; } = null!;
        public virtual DbSet<Event> Events { get; set; } = null!;
        public virtual DbSet<Organizer> Organizers { get; set; } = null!;
        public virtual DbSet<Shopitem> Shopitems { get; set; } = null!;
        public virtual DbSet<Volunteer> Volunteers { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseMySQL("server=localhost;port=3306;user=root;password=357159;database=webapi");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Achievement>(entity =>
            {
                entity.ToTable("achievements");

                entity.HasIndex(e => e.VolunteerEmail, "fk_achievements_volunteers_idx");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Date).HasMaxLength(45);

                entity.Property(e => e.Description).HasMaxLength(45);

                entity.Property(e => e.Title).HasMaxLength(45);

                entity.Property(e => e.VolunteerEmail).HasMaxLength(45);

                entity.HasOne(d => d.VolunteerEmailNavigation)
                    .WithMany(p => p.Achievements)
                    .HasForeignKey(d => d.VolunteerEmail)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_achievements_volunteers");
            });

            modelBuilder.Entity<Administrator>(entity =>
            {
                entity.ToTable("administrators");

                entity.Property(e => e.Email).HasMaxLength(45);

                entity.Property(e => e.FirstName).HasMaxLength(45);

                entity.Property(e => e.LastName).HasMaxLength(45);

                entity.Property(e => e.PhoneNumber).HasMaxLength(45);
            });

            modelBuilder.Entity<Collaborator>(entity =>
            {
                entity.HasKey(e => e.Email)
                    .HasName("PRIMARY");

                entity.ToTable("collaborators");

                entity.HasIndex(e => e.AdministratorId, "fk_collaborators_administrators1_idx");

                entity.Property(e => e.Email).HasMaxLength(45);

                entity.Property(e => e.OrganizationName).HasMaxLength(45);

                entity.Property(e => e.Password).HasMaxLength(45);

                entity.HasOne(d => d.Administrator)
                    .WithMany(p => p.Collaborators)
                    .HasForeignKey(d => d.AdministratorId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_collaborators_administrators");
            });

            modelBuilder.Entity<Event>(entity =>
            {
                entity.ToTable("events");

                entity.HasIndex(e => e.OrganizerEmail, "fk_events_organizers1_idx");

                entity.Property(e => e.Description).HasMaxLength(45);

                entity.Property(e => e.Location).HasMaxLength(45);

                entity.Property(e => e.OrganizerEmail).HasMaxLength(45);

                entity.Property(e => e.Sponsors).HasColumnType("json");

                entity.Property(e => e.Title).HasMaxLength(45);

                entity.Property(e => e.Type).HasMaxLength(45);

                entity.HasOne(d => d.OrganizerEmailNavigation)
                    .WithMany(p => p.EventsNavigation)
                    .HasForeignKey(d => d.OrganizerEmail)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_events_organizers1");

                entity.HasMany(d => d.VolunteerEmails)
                    .WithMany(p => p.Events)
                    .UsingEntity<Dictionary<string, object>>(
                        "EventsVolunteer",
                        l => l.HasOne<Volunteer>().WithMany().HasForeignKey("VolunteerEmail").OnDelete(DeleteBehavior.ClientSetNull).HasConstraintName("fk_events_has_volunteers_volunteers1"),
                        r => r.HasOne<Event>().WithMany().HasForeignKey("EventId").OnDelete(DeleteBehavior.ClientSetNull).HasConstraintName("fk_events_has_volunteers_events1"),
                        j =>
                        {
                            j.HasKey("EventId", "VolunteerEmail").HasName("PRIMARY");

                            j.ToTable("events_volunteers");

                            j.HasIndex(new[] { "EventId" }, "fk_events_has_volunteers_events1_idx");

                            j.HasIndex(new[] { "VolunteerEmail" }, "fk_events_has_volunteers_volunteers1_idx");

                            j.IndexerProperty<string>("VolunteerEmail").HasMaxLength(45);
                        });
            });

            modelBuilder.Entity<Organizer>(entity =>
            {
                entity.HasKey(e => e.Email)
                    .HasName("PRIMARY");

                entity.ToTable("organizers");

                entity.HasIndex(e => e.AdministratorId, "fk_organizers_administrators_idx");

                entity.Property(e => e.Email).HasMaxLength(45);

                entity.Property(e => e.City).HasMaxLength(45);

                entity.Property(e => e.Events).HasColumnType("json");

                entity.Property(e => e.OrganizationName).HasMaxLength(45);

                entity.Property(e => e.Password).HasMaxLength(45);

                entity.HasOne(d => d.Administrator)
                    .WithMany(p => p.Organizers)
                    .HasForeignKey(d => d.AdministratorId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_organizers_administrators");
            });

            modelBuilder.Entity<Shopitem>(entity =>
            {
                entity.ToTable("shopitems");

                entity.HasIndex(e => e.CollaboratorEmail, "fk_shopitems_collaborators1_idx");

                entity.Property(e => e.CollaboratorEmail).HasMaxLength(45);

                entity.Property(e => e.Description).HasMaxLength(45);

                entity.Property(e => e.Name).HasMaxLength(45);

                entity.HasOne(d => d.CollaboratorEmailNavigation)
                    .WithMany(p => p.Shopitems)
                    .HasForeignKey(d => d.CollaboratorEmail)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_shopitems_collaborators1");
            });

            modelBuilder.Entity<Volunteer>(entity =>
            {
                entity.HasKey(e => e.Email)
                    .HasName("PRIMARY");

                entity.ToTable("volunteers");

                entity.Property(e => e.Email).HasMaxLength(45);

                entity.Property(e => e.City).HasMaxLength(45);

                entity.Property(e => e.FirstName).HasMaxLength(45);

                entity.Property(e => e.LastName).HasMaxLength(45);

                entity.Property(e => e.Level).HasDefaultValueSql("'1'");

                entity.Property(e => e.Password).HasMaxLength(45);

                entity.Property(e => e.Username).HasMaxLength(45);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}

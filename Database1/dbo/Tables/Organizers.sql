﻿CREATE TABLE [dbo].[Organizers]
(
    [Email] NVARCHAR(30) NOT NULL, 
    [Password] NVARCHAR(30) NOT NULL, 
    [OrganizationName] NVARCHAR(30) NOT NULL, 
    [City] NVARCHAR(30) NOT NULL, 
	CONSTRAINT [PK_Organizers] PRIMARY KEY ([Email])
)
